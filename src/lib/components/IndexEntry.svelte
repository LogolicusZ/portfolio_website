<script lang="ts">
  import { inview } from "$lib/utils/inview";

  type Image = { path: string; alt: string; width?: number; height?: number };

  let {
    href,
    title,
    description = "",
    meta = "",
    image = null,
    delay = 0,
    priority = false,
  }: {
    href: string;
    title: string;
    description?: string;
    meta?: string;
    image?: Image | null;
    delay?: number;
    priority?: boolean;
  } = $props();
</script>

<a {href} use:inview={delay} class="reveal unset-link group block text-center no-underline">
  {#if image}
    <img
      src={image.path}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      class="aspect-video w-full rounded-sm object-cover transition-opacity duration-300 group-hover:opacity-85"
    />
  {/if}

  {#if meta}
    <p class="mt-7 text-xs tracking-[0.2em] text-neutral-500 uppercase">{meta}</p>
  {/if}

  <h2
    class="mt-2 font-serif text-2xl tracking-tight text-balance decoration-1 underline-offset-[0.3em] group-hover:underline sm:text-3xl"
    class:mt-7={!meta}
  >
    {title}
  </h2>

  {#if description}
    <p class="mx-auto mt-3 max-w-lg text-pretty text-neutral-500">{description}</p>
  {/if}
</a>
