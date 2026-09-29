import { error } from '@sveltejs/kit';

export const prerender = true;

const modules = import.meta.glob('/src/lib/posts/*.md');

export async function load({ params }) {
  const path = `/src/lib/posts/${params.slug}.md`;
  if (!(path in modules)) throw error(404, `Not found: ${params.slug}`);
  const mod: any = await modules[path]();
  return { content: mod.default, meta: mod.metadata };
}

export function entries() {
  return Object.keys(modules).map((p) => ({
    slug: p.split('/').pop()!.replace('.md', '')
  }));
}