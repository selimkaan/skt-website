import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/wordpress';
import { SITE_URL } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedISO),
  }));

  const latestModified = posts.reduce<Date | undefined>((latest, post) => {
    const modified = new Date(post.modifiedISO);
    return !latest || modified > latest ? modified : latest;
  }, undefined);

  return [
    {
      url: SITE_URL,
      lastModified: latestModified,
    },
    {
      url: `${SITE_URL}/hakkimda`,
    },
    ...blogEntries,
  ];
}

