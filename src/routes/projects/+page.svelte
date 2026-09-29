<script lang="ts">
  import { inview } from '$lib/utils/inview';
  import IndexEntry from '$lib/components/IndexEntry.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Projects — logolicusz</title>
</svelte:head>

<section class="mx-auto flex max-w-3xl flex-col items-center pb-8 text-center">
  <h1 use:inview class="reveal font-serif text-4xl tracking-tight sm:text-5xl">Projects</h1>

  <p
    use:inview={100}
    class="reveal mt-6 max-w-lg text-base leading-relaxed text-pretty text-neutral-500 sm:text-lg"
  >
    Keyboards, sites and the occasional detour. A few of the things I have built.
  </p>

  <div class="mt-[clamp(3rem,7vw,4.5rem)] w-full space-y-[clamp(3.5rem,8vw,6.5rem)]">
    {#each data.projects as project, i}
      <IndexEntry
        href="/projects/{project.slug}"
        title={project.title}
        description={project.description}
        image={project.banner ?? null}
        delay={i * 80}
        priority={i === 0}
      />
    {/each}
  </div>
</section>
