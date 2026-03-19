/** @type {import('next').NextConfig} */
function getSupabaseRemotePattern() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!rawUrl) {
    return [];
  }

  try {
    const parsedUrl = new URL(rawUrl);

    return [
      {
        protocol: parsedUrl.protocol.replace(":", ""),
        hostname: parsedUrl.hostname,
        pathname: "/storage/v1/object/public/**",
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: getSupabaseRemotePattern(),
  },
};

export default nextConfig;
