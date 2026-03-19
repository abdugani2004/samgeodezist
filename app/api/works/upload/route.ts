import { NextResponse } from "next/server";
import { isSupabaseAdminConfigured, uploadWorkImage } from "@/lib/supabase-admin";

function isAuthorized(request: Request) {
  const password = process.env.ADMIN_PANEL_PASSWORD;
  const provided = request.headers.get("x-admin-password");

  return Boolean(password && provided && password === provided);
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Ruxsat yo'q." }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ message: "Supabase admin sozlanmagan." }, { status: 500 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "Rasm topilmadi." }, { status: 400 });
  }

  const uploaded = await uploadWorkImage(file);

  return NextResponse.json({
    success: true,
    imageUrl: uploaded.publicUrl,
  });
}
