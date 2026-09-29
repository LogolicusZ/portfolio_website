<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from '$lib/utils/inview';
  import Carousel from '$lib/components/Carousel.svelte';
  import Gallery from '$lib/components/Gallery.svelte';

  const junaImages = [
    { src: '/assets/img/projects/juna/Juna_cyan.avif', alt: 'Cyan Juna Image' },
    { src: '/assets/img/projects/juna/file_10.avif', alt: 'Juna keyboard render' },
    { src: '/assets/img/projects/juna/file_9.avif',  alt: 'Juna keyboard detail' },
    { src: '/assets/img/projects/juna/file_11.avif', alt: 'Juna keyboard aesthetic shot' }
  ];

  const images = [
    { src: '/assets/img/projects/juna/Juna_cyan.avif', alt: 'Photo 1', width: 2560, height: 1707 },
    { src: '/assets/img/projects/juna/file_6.avif',  alt: 'Photo 2', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_7.avif',  alt: 'Photo 3', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_8.avif',  alt: 'Photo 4', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_9.avif',  alt: 'Photo 5', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_10.avif', alt: 'Photo 6', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_11.avif', alt: 'Photo 7', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_12.avif', alt: 'Photo 8', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_13.avif', alt: 'Photo 9', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_14.avif', alt: 'Photo 10', width: 2560, height: 1920 },
    { src: '/assets/img/projects/juna/file_15.avif', alt: 'Photo 11', width: 2560, height: 1920 }
  ];

  const specs = [
    { label: 'Layout',       value: '60%' },
    { label: 'Typing angle', value: '7.5°' },
    { label: 'Mounting',     value: 'Top mount + gasket o-ring' },
    { label: 'Colors',       value:'Apple Silver, Sage Mint, Bondi Cyan'},
    { label: 'Layouts',       value:'WKL, WK, HHKB'}
  ];

  const links = [
    { href: 'https://geekhack.org/index.php?topic=125384.0', label: 'Geekhack thread' },
    { href: 'https://www.youtube.com/watch?v=UUzz4h1AeuI',   label: 'Sound test' }
  ];
</script>

<section class="mx-auto max-w-7xl w-full px-2.5 py-2.5">
  <header
    class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8 md:mb-10"
    in:fly={{ y: 12, duration: 500 }}
  >
    <div class="order-2 md:order-1">
      <p class="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Product</p>
      <h1 class="text-3xl md:text-5xl font-serif tracking-tight">
        Juna Mechanical Keyboard
      </h1>
    </div>
    <p class="order-1 md:order-2 text-xs uppercase tracking-[0.2em] opacity-50 md:text-right">
      Geekhack
    </p>
  </header>

  <div in:fly={{ y: 16, duration: 500, delay: 100 }}>
    <Carousel images={junaImages} />
  </div>

  <div
    use:inview
    class="reveal grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-10 md:mt-14 mb-12 md:mb-16"
  >
    <dl class="md:col-span-4 md:order-2 flex flex-col">
      {#each specs as { label, value }}
        <div class="flex flex-col py-3 border-t border-current/10 last:border-b">
          <dt class="text-[11px] uppercase tracking-[0.15em] opacity-50">{label}</dt>
          <dd class="mt-1 text-sm">{value}</dd>
        </div>
      {/each}
    </dl>

    <div class="md:col-span-8 md:order-1 text-base sm:text-lg leading-relaxed space-y-5 max-w-[60ch]">
      <p>
        Juna is a 60% keyboard available in WKL, WK and HHKB layouts. While at first
        glance it sits on the stiffer side of keyboards, you'd be surprised how forgiving
        the top mount can feel while also having the option of gummy o-ring mounting for
        those who prefer a bouncier typing experience.
      </p>
      <p>
        As one of my earliest designs, Juna reflects my appreciation for classic kustoms
        from the mid-2000s, specifically pulling inspiration from the OTD 360c, while
        Clairo's <em class="italic">Charm</em> album lends the board its theme across its
        name, engravings and three colorways: Apple Silver, Sage Mint and Bondi Cyan.
      </p>
    </div>
  </div>

  <Gallery {images} />

  <footer use:inview class="reveal mt-0.75 pt-8">
    <p class="text-[11px] uppercase tracking-[0.2em] opacity-50 mb-4">Links</p>
    <ul class="flex flex-col gap-2">
      {#each links as { href, label }}
        <li>
          <a
            {href}
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-baseline gap-2 break-words transition-opacity hover:opacity-60"
          >
            <span class="underline-offset-4 group-hover:underline">{label}</span>
            <span aria-hidden="true" class="opacity-40 transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </li>
      {/each}
    </ul>
  </footer>
</section>