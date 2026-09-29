<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { initPhotoSwipe } from '$lib/photoswipe';

  let { data } = $props();

  // Images in post bodies opt in by wrapping in <a data-pswp-width …>, giving
  // them the same click-to-zoom behaviour as the Gallery and Projects pages.
  let bodyEl: HTMLDivElement;
  let destroyLightbox: (() => void) | null = null;

  onMount(() => {
    destroyLightbox = initPhotoSwipe(bodyEl);
  });

  onDestroy(() => {
    destroyLightbox?.();
    destroyLightbox = null;
  });
  const { content: Content, meta } = data;

  // Explicit locale — a bare toLocaleDateString() formats with the server's
  // locale during prerender and the visitor's on hydration, which mismatch.
  const date = new Date(meta.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
</script>

<svelte:head>
  <title>{meta.title} — logolicusz</title>
</svelte:head>

<article class="mx-auto max-w-3xl pb-8">
  <header class="text-center">
    <p class="text-xs tracking-[0.2em] text-neutral-500 uppercase">{date}</p>
    <h1 class="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
      {meta.title}
    </h1>
    {#if meta.description}
      <p class="mx-auto mt-5 max-w-lg text-pretty text-neutral-500 sm:text-lg">
        {meta.description}
      </p>
    {/if}
  </header>

  <!-- Typography defaults are overridden to match the rest of the site:
       serif headings, neutral muted text, rounded-sm imagery. -->
  <div
    bind:this={bodyEl}
    class="prose prose-neutral mt-[clamp(2.5rem,6vw,4rem)] max-w-none
           prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight
           prose-h2:mt-[1.8em] prose-h2:mb-[0.7em] prose-h2:text-2xl sm:prose-h2:text-3xl
           prose-p:text-pretty prose-p:leading-relaxed
           prose-img:rounded-sm prose-img:my-0
           prose-figure:my-[clamp(1.75rem,4vw,2.75rem)]
           prose-figcaption:mt-3 prose-figcaption:text-neutral-500"
  >
    <Content />
  </div>
</article>
