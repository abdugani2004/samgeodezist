import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samgeodezist.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/#xizmatlar`,
      lastModified,
    },
    {
      url: `${baseUrl}/#bizning-ishlar`,
      lastModified,
    },
    {
      url: `${baseUrl}/#postlar`,
      lastModified,
    },
    {
      url: `${baseUrl}/#aloqa`,
      lastModified,
    },
  ];
}
