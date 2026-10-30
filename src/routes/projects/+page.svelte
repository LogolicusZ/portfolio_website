<script lang="ts">
  import { inview } from '$lib/utils/inview';

  let { data } = $props();
</script>

<svelte:head>
  <title>Projects — logolicusz</title>
</svelte:head>

<section class="pb-8">
  <h1 class="sr-only">Projects</h1>

  <div class="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
    {#each data.projects as project, i}
      <a
        href="/projects/{project.slug}"
        use:inview={i * 80}
        class="reveal unset-link group relative block overflow-hidden text-left no-underline"
      >
        <img
          src={project.banner.path}
          alt={project.banner.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : undefined}
          class="aspect-video w-full object-cover"
        />

        <!-- Darkens the image on hover/focus and reveals the call to action. -->
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/60 group-focus-visible:bg-black/60"
        >
          <span
            class="font-mono text-sm tracking-widest text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            Have a look
          </span>
        </div>

        <div
          class="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 pb-8 text-white"
        >
          <h2 class="font-spire text-5xl leading-[1.1] tracking-tight sm:text-6xl md:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <p class="mt-1 max-w-md font-mono text-xs leading-snug text-white/80 uppercase sm:text-sm">{project.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>
