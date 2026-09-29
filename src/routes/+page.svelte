<script lang="ts">
  import { inview } from '$lib/utils/inview';
  import ContactCta from '$lib/components/ContactCta.svelte';
</script>

<svelte:head>
  <title>logolicusz</title>
</svelte:head>

<div class="flex flex-col items-center">
  <img
    src="/assets/img/banner.avif"
    alt="A keyboard build photographed on a desk"
    width="2560"
    height="1920"
    fetchpriority="high"
    class="aspect-video w-full max-w-[110rem] rounded-sm object-cover"
  />

  <p
    use:inview
    class="reveal mt-[2em] max-w-[min(92%,22em)] text-center font-serif text-[clamp(1.25rem,3.05vw,4.9rem)] leading-[1.3] tracking-tight text-balance"
  >
    Independent designer, crafting for passion with occasional side projects.
  </p>

  <p use:inview={120} class="reveal mt-[1.2em] max-w-[min(92%,27em)] text-center text-[clamp(1rem,1.35vw,2.15rem)] text-neutral-500">
    Keyboards, photography and the occasional bit of code. Have a look around.
  </p>
</div>

<ContactCta />
