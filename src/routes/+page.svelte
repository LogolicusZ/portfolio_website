<script lang="ts">
  import { inview } from '$lib/utils/inview';
  import ContactCta from '$lib/components/ContactCta.svelte';
  import { galleryImages } from '$lib/data/gallery';

  const slides = galleryImages.filter((image) => image.width > image.height);

  const headline = [
    ['Independent', 'designer,', 'crafting'],
    ['for', 'passion', 'with', 'occasional'],
    ['side', 'projects.']
  ];

  let current = $state(0);

  $effect(() => {
    const id = setInterval(() => {
      current = (current + 1) % slides.length;
    }, 2000);
    return () => clearInterval(id);
  });
</script>

<svelte:head>
  <title>logolicusz</title>
</svelte:head>

<div class="-mt-4 flex flex-col items-center">
  <div class="pixel-corners relative aspect-video w-full max-w-[110rem] overflow-hidden rounded-sm">
    {#each slides as image, i (image.src)}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fetchpriority={i === 0 ? 'high' : 'auto'}
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out {i === current
          ? 'opacity-100'
          : 'opacity-0'}"
      />
    {/each}
    <div class="absolute inset-0 bg-black/45"></div>

    <p
      use:inview
      class="reveal absolute inset-0 flex flex-col justify-center px-[4%] font-serif text-[clamp(1rem,6vw,7rem)] leading-[1.05] text-white"
    >
      <span class="sr-only">{headline.flat().join(' ')}</span>
      {#each headline as line, i (i)}
        <span aria-hidden="true" class="flex justify-between {i === 1 ? 'my-[0.2em]' : ''} {i === headline.length - 1 ? 'w-[55%]' : ''}">
          {#each line as word, j (j)}
            <span>{word}</span>
          {/each}
        </span>
      {/each}
    </p>
  </div>

  <p use:inview={120} class="reveal mt-[2em] max-w-[min(92%,27em)] text-center text-[clamp(1rem,1.35vw,2.15rem)] text-neutral-500">
    Keyboards, photography and the occasional bit of code. Have a look around.
  </p>
</div>

<ContactCta />
