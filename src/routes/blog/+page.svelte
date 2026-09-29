<script lang="ts">
  import { inview } from '$lib/utils/inview';
  import IndexEntry from '$lib/components/IndexEntry.svelte';

  let { data } = $props();

  // Explicit locale so the server and client render the same string.
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
</script>

<svelte:head>
  <title>Blog — logolicusz</title>
</svelte:head>

<section class="mx-auto flex max-w-3xl flex-col items-center pb-8 text-center">
  <h1 use:inview class="reveal font-serif text-4xl tracking-tight sm:text-5xl">Blog</h1>

  <p
    use:inview={100}
    class="reveal mt-6 max-w-lg text-base leading-relaxed text-pretty text-neutral-500 sm:text-lg"
  >
    Notes on keyboards, photography and whatever else I have been building.
  </p>

  <div class="mt-[clamp(3rem,7vw,4.5rem)] w-full space-y-[clamp(3.5rem,8vw,6.5rem)]">
    {#each data.posts as post, i}
      <IndexEntry
        href="/blog/{post.slug}"
        title={post.title}
        description={post.description}
        meta={post.date ? formatDate(post.date) : ''}
        image={post.banner ?? null}
        delay={i * 80}
        priority={i === 0}
      />
    {/each}
  </div>
</section>
