<script lang="ts">
  const links = [
    {
      href: "https://www.instagram.com/logolicusz.kb/",
      label: "Instagram",
      accent: "var(--color-accent-lime)",
    },
    {
      href: "https://discord.com/users/688701393258938417",
      label: "Discord",
      accent: "var(--color-accent-grass)",
    },
    {
      href: "https://github.com/LogolicusZ",
      label: "Github",
      accent: "var(--color-accent-green)",
    },
    {
      href: "https://krchv.logolicusz.com",
      label: "krchv",
      accent: "var(--color-accent-forest)",
    },
  ];
</script>

<footer class="px-gutter mt-[clamp(2.5rem,5vw,4.5rem)] pb-[clamp(1.5rem,3vw,2.6rem)]">
  <div
    class="flex flex-col items-center gap-y-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[clamp(1.125rem,2.34vw,2.25rem)]"
  >
    <a href="/" class="unset-link no-underline" aria-label="logolicusz — home">
      <img
        src="/assets/svg/logomark.svg"
        alt=""
        width="1500"
        height="1500"
        class="w-[clamp(2.3rem,3.5vw,3.4rem)]"
      />
    </a>

    {#each links as link}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        style="--accent: {link.accent}"
        class="unset-link text-social leading-[1.1] no-underline transition-colors duration-200 hover:text-[var(--accent)]"
      >
        {link.label}
      </a>
    {/each}
  </div>

  <div
    class="mt-[clamp(1.35rem,2.7vw,2.1rem)] flex flex-col items-center gap-y-1 border-t border-black/10 pt-4 text-sm text-neutral-500 sm:flex-row sm:justify-between"
  >
    <p>&copy; 2026 LogolicusZ</p>
    <a
      href="/legal/"
      style="--accent: var(--color-accent-forest)"
      class="unset-link no-underline transition-colors hover:text-[var(--accent)]"
    >
      Privacy Policy
    </a>
  </div>
</footer>
