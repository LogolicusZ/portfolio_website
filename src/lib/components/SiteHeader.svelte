<script lang="ts">
  import { page } from "$app/state";

  const nav = [
    { href: "/gallery/", label: "Gallery" },
    { href: "/about/", label: "About Me" },
    { href: "/projects/", label: "Projects" },
    { href: "/blog/", label: "Blog" },
  ];

  const current = $derived(page.url.pathname.replace(/\/+$/, "") || "/");

  const isActive = (href: string) => {
    const base = href.replace(/\/+$/, "");
    return current === base || current.startsWith(base + "/");
  };

  let bar: HTMLElement;
  let sentinel: HTMLElement;
  let stuck = $state(false);

  // The sentinel sits right where the bar's top edge would be, so once it
  // scrolls past the bar's sticky offset the bar is stuck.
  $effect(() => {
    const top = parseFloat(getComputedStyle(bar).top) || 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        stuck = !entry.isIntersecting && entry.boundingClientRect.top < top;
      },
      { rootMargin: `-${top}px 0px 0px 0px` },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  });

  function toTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }
</script>

<header style="view-transition-name: site-header" class="px-gutter flex flex-col items-center pt-12 text-center md:pt-[4.9vw]">
  <a
    href="/"
    class="unset-link gradient-hover font-spire text-logotype my-[-0.15em] py-[0.15em] leading-[0.75] no-underline"
    aria-label="logolicusz — home"
  >
    <span class="uppercase" aria-hidden="true">logolicusz</span>
  </a>
</header>

<!-- Outside the header so the nav can stay stuck for the whole page, not just
     while the header is on screen. No wrapping or max width: once stuck on a
     phone the bar is wider than the screen before its 0.8 scale, but
     self-center keeps it centred and it fits after scaling. -->
<div bind:this={sentinel} class="mt-4 h-0 md:mt-6" aria-hidden="true"></div>
<div
  bind:this={bar}
  data-stuck={stuck || undefined}
  class="nav-float sticky top-3 z-50 flex w-fit items-center justify-center self-center"
>
  <nav aria-label="Primary" class="nav-pill text-center">
    <ul class="flex items-center justify-center gap-x-[clamp(0.75rem,4.4vw,4.2rem)] whitespace-nowrap">
      {#each nav as link}
        <li>
          <a
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            class="pill unset-link text-nav block px-1 py-2 leading-tight no-underline md:p-0"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <button type="button" onclick={toTop} inert={!stuck} aria-label="Back to top" class="nav-top">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-[0.9em] w-[0.9em] flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  </button>
</div>
