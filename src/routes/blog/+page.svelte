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

<section class="pb-8">
  <h1 class="sr-only">Blog</h1>

  <div class="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
    {#each data.posts as post, i}
      <IndexEntry
        href="/blog/{post.slug}"
        title={post.title}
        description={post.description}
        meta={post.date ? formatDate(post.date) : ''}
        image={post.banner ?? null}
        delay={i * 80}
        priority={i === 0}
        split
      />
    {/each}
  </div>
</section>
