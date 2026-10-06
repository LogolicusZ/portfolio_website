<script lang="ts">
  const links = [
    {
      href: "https://www.instagram.com/logolicusz.kb/",
      label: "Instagram",
    },
    {
      href: "https://discord.com/users/688701393258938417",
      label: "Discord",
    },
    {
      href: "https://github.com/LogolicusZ",
      label: "Github",
    },
    {
      href: "https://krchv.logolicusz.com",
      label: "krchv",
    },
  ];
</script>

<footer class="px-gutter mt-[clamp(2.5rem,5vw,4.5rem)] pb-[clamp(1.5rem,3vw,2.6rem)]">
  <div
    class="flex flex-col items-center gap-y-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[clamp(1.125rem,2.34vw,2.25rem)]"
  >
    <!-- Inlined (same paths as /assets/svg/new_favicon.svg) so the fill can
         follow currentColor and turn green on hover. -->
    <a
      href="/"
      class="unset-link hover:text-accent-neon no-underline transition-colors duration-200"
      aria-label="logolicusz — home"
    >
      <svg
        viewBox="0 0 250 226"
        width="250"
        height="226"
        fill="currentColor"
        aria-hidden="true"
        class="h-auto w-[clamp(2.3rem,3.5vw,3.4rem)]"
      >
        <path d="M144 77.7762L124.823 96.9529L106 78.1299L49.8704 21.9999L23.0003 48.87L80.13 106L97.9533 123.823L77.7769 144L23.0002 198.777L49.8702 225.647L106 169.516C116.396 159.12 133.251 159.12 143.646 169.516L144 169.87L199.777 225.647L226.647 198.777L151.693 123.823L169.517 106C155.424 106 144 94.5753 144 80.4829L144 77.7762Z" />
        <path d="M169.517 106C155.424 106 144 94.5753 144 80.4829L144 77.7762L144 0L106 2.6974e-06L106 78.1299L106 105.999L80.13 106L8.09219e-06 106L0 144L77.7769 144L106 143.999V169.516C116.396 159.12 133.251 159.12 143.646 169.516L144 169.87V143.999L250 144L250.001 106L169.517 106Z" />
      </svg>
    </a>

    {#each links as link}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        class="pill unset-link text-social leading-[1.1] no-underline"
      >
        {link.label}
      </a>
    {/each}
  </div>

  <div
    class="mt-[clamp(1.35rem,2.7vw,2.1rem)] flex flex-col items-center gap-y-1 pt-4 text-sm text-neutral-500 sm:flex-row sm:justify-between"
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
