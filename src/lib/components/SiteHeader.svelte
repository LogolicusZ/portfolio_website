<script lang="ts">
  import { page } from "$app/state";

  const wordmark = "logolicusz".split("");

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
</script>

<header style="view-transition-name: site-header" class="px-gutter flex flex-col items-center gap-4 pt-12 text-center md:gap-6 md:pt-[4.9vw]">
  <a
    href="/"
    class="unset-link group no-underline"
    aria-label="logolicusz — home"
  >
    <span class="font-zhirok text-logotype uppercase leading-[1.15]" aria-hidden="true">
      {#each wordmark as letter, i}
        <span
          class="group-hover:text-accent-neon transition-colors duration-200 ease-out"
          style="transition-delay: {i * 35}ms"
        >{letter}</span>
      {/each}
    </span>
  </a>

  <nav aria-label="Primary">
    <ul class="flex flex-wrap items-center justify-center gap-x-[clamp(1.25rem,4.4vw,4.2rem)] gap-y-0.5">
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
</header>
