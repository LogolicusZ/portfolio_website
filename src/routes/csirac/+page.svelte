<script lang="ts">
  import { fly } from 'svelte/transition';
  import Gallery from '$lib/components/Gallery.svelte';

  const hero = {
    src: '/assets/img/csirac/render8.avif',
    alt: 'CSIRAC render 8',
    width: 2560,
    height: 1294
  };

  const images = [
    { src: '/assets/img/csirac/render1.avif', alt: 'Render 1', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render2.avif', alt: 'Render 2', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render3.avif', alt: 'Render 3', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render4.avif', alt: 'Render 4', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render5.avif', alt: 'Render 5', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render6.avif', alt: 'Render 6', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render7.avif', alt: 'Render 7', width: 2353, height: 1324 },
    { src: '/assets/img/csirac/render9.avif', alt: 'Render 9', width: 2560, height: 1440 },
    { src: '/assets/img/csirac/screenshot1.avif', alt: 'Screenshot 1', width: 1830, height: 726 },
    { src: '/assets/img/csirac/screenshot2.avif', alt: 'Screenshot 2', width: 948, height: 397 },
    { src: '/assets/img/csirac/screenshot3.avif', alt: 'Screenshot 3', width: 1947, height: 804 },
    { src: '/assets/img/csirac/screenshot4.avif', alt: 'Screenshot 4', width: 1855, height: 754 },
    { src: '/assets/img/csirac/screenshot5.avif', alt: 'Screenshot 5', width: 1928, height: 779 },
    { src: '/assets/img/csirac/screenshot6.avif', alt: 'Screenshot 6', width: 1884, height: 772 },
    { src: '/assets/img/csirac/screenshot7.avif', alt: 'Screenshot 7', width: 1770, height: 711 }
  ];
</script>

<svelte:head>
  <title>CSIRAC</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="mx-auto max-w-7xl px-1 py-1">
  <div in:fly={{ y: 16, duration: 500 }}>
    <h1 class="mb-6 font-serif text-6xl">CSIRAC</h1>
  </div>

  <Gallery {hero} {images} />
</section>
