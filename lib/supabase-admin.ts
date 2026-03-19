const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const worksBucket = process.env.SUPABASE_WORKS_BUCKET || "works";

export function isSupabaseAdminConfigured() {
  return Boolean(supabaseUrl && serviceRoleKey);
}

function getAdminHeaders(contentType = "application/json") {
  if (!serviceRoleKey) {
    throw new Error("Supabase service role key topilmadi.");
  }

  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": contentType,
  };
}

export async function createWork(input: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  if (!supabaseUrl) {
    throw new Error("Supabase URL topilmadi.");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/works`, {
    method: "POST",
    headers: {
      ...getAdminHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      title: input.title,
      description: input.description,
      image_url: input.imageUrl,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Work yozuvini saqlab bo'lmadi.");
  }

  return response.json();
}

export async function deleteWork(id: string) {
  if (!supabaseUrl) {
    throw new Error("Supabase URL topilmadi.");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/works?id=eq.${id}`, {
    method: "DELETE",
    headers: getAdminHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Work yozuvini o'chirib bo'lmadi.");
  }
}

export async function uploadWorkImage(file: File) {
  if (!supabaseUrl) {
    throw new Error("Supabase URL topilmadi.");
  }

  const extension = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const filePath = `work-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extension}`;
  const arrayBuffer = await file.arrayBuffer();

  const response = await fetch(
    `${supabaseUrl}/storage/v1/object/${worksBucket}/${filePath}`,
    {
      method: "POST",
      headers: {
        ...getAdminHeaders(file.type || "application/octet-stream"),
        "x-upsert": "false",
      },
      body: Buffer.from(arrayBuffer),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Rasmni yuklab bo'lmadi.");
  }

  return {
    path: filePath,
    publicUrl: `${supabaseUrl}/storage/v1/object/public/${worksBucket}/${filePath}`,
  };
}

export async function deleteWorkImageByUrl(imageUrl: string) {
  if (!supabaseUrl) {
    return;
  }

  const marker = `/storage/v1/object/public/${worksBucket}/`;

  if (!imageUrl.includes(marker)) {
    return;
  }

  const filePath = imageUrl.split(marker)[1];

  if (!filePath) {
    return;
  }

  await fetch(`${supabaseUrl}/storage/v1/object/${worksBucket}`, {
    method: "DELETE",
    headers: getAdminHeaders(),
    body: JSON.stringify({
      prefixes: [filePath],
    }),
    cache: "no-store",
  });
}
