<script lang="ts">
  interface CarouselImage {
    src: string;
    alt: string;
  }

  interface Props {
    images: CarouselImage[];
    autoplay?: boolean;
    interval?: number;
  }

  let { images, autoplay = true, interval = 15000 }: Props = $props();

  let current = $state(0);
  let touchStartX = 0;

  function next() {
    current = (current + 1) % images.length;
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  }

  $effect(() => {
    if (!autoplay || images.length <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  });
</script>

<div
  class="relative w-full group"
  role="region"
  aria-roledescription="carousel"
  aria-label="Image carousel"
  tabindex="0"
  onkeydown={handleKeydown}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  <div class="relative w-full aspect-4/3 max-h-[min(65dvh,700px)] overflow-hidden rounded-sm">
    {#each images as image, i}
      <img
        src={image.src}
        alt={image.alt}
        loading={i === 0 ? 'eager' : 'lazy'}
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out {i === current
          ? 'opacity-100'
          : 'opacity-0 pointer-events-none'}"
      />
    {/each}
  </div>

<button
  type="button"
  onclick={prev}
  aria-label="Previous image"
  class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-black rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
</button>

<button
  type="button"
  onclick={next}
  aria-label="Next image"
  class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-black rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
</button>
</div>