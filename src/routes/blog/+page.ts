export const prerender = true;

export async function load() {
  const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });
  const posts = Object.entries(modules)
    .map(([path, mod]: any) => ({
      slug: path.split('/').pop().replace('.md', ''),
      ...mod.metadata
    }))
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return { posts };
}