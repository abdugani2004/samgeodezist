import type { ShowcaseItem, WorkItem } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function getWorksFromSupabase(): Promise<ShowcaseItem[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return [];
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/works?select=id,title,description,image_url`,
    {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    return [];
  }

  const rows = (await response.json()) as WorkItem[];

  return rows
    .filter((row) => row.image_url)
    .map((row, index) => ({
      title: row.title?.trim() || `Bizning ishlar ${index + 1}`,
      description: row.description?.trim() || "Amaliy ishlarimizdan lavha.",
      image: row.image_url as string,
    }));
}

export async function getRawWorksFromSupabase(): Promise<WorkItem[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return [];
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/works?select=id,title,description,image_url`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as WorkItem[];
}
