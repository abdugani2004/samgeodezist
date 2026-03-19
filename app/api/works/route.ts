import { NextResponse } from "next/server";
import { createWork, deleteWork, deleteWorkImageByUrl, isSupabaseAdminConfigured } from "@/lib/supabase-admin";
import { getRawWorksFromSupabase } from "@/lib/supabase";

function isAuthorized(request: Request) {
  const password = process.env.ADMIN_PANEL_PASSWORD;
  const provided = request.headers.get("x-admin-password");

  return Boolean(password && provided && password === provided);
}

export async function GET() {
  const works = await getRawWorksFromSupabase();
  return NextResponse.json({ works });
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Ruxsat yo'q." }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ message: "Supabase admin sozlanmagan." }, { status: 500 });
  }

  const payload = (await request.json()) as {
    title?: string;
    description?: string;
    imageUrl?: string;
  };

  if (!payload.title?.trim() || !payload.description?.trim() || !payload.imageUrl?.trim()) {
    return NextResponse.json({ message: "Barcha maydonlarni to'ldiring." }, { status: 400 });
  }

  await createWork({
    title: payload.title.trim(),
    description: payload.description.trim(),
    imageUrl: payload.imageUrl.trim(),
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Ruxsat yo'q." }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ message: "Supabase admin sozlanmagan." }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const imageUrl = searchParams.get("imageUrl");

  if (!id) {
    return NextResponse.json({ message: "ID topilmadi." }, { status: 400 });
  }

  await deleteWork(id);

  if (imageUrl) {
    await deleteWorkImageByUrl(imageUrl);
  }

  return NextResponse.json({ success: true });
}
