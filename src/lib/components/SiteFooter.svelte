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
    <a
      href="/"
      class="group unset-link no-underline"
      aria-label="logolicusz — home"
    >
      <svg
        viewBox="0 0 946 854"
        width="946"
        height="854"
        fill="none"
        aria-hidden="true"
        class="h-auto w-[clamp(2.3rem,3.5vw,3.4rem)]"
      >
        <path d="M857.482 752.039L755.824 853.697L543.462 641.336C504.132 602.005 440.365 602.005 401.035 641.336L188.676 853.697L87.0175 752.039L294.256 544.798L0 544.8L3.06155e-05 401.034L303.159 401.032L87.0179 184.892L188.676 83.233L401.035 295.591L401.034 1.02052e-05L544.801 0L544.801 304.494C544.801 357.81 588.022 401.032 641.339 401.032L945.835 401.034L945.835 544.801L650.242 544.798L857.482 752.039Z" fill="url(#footer-favicon-gradient)" />
        <defs>
          <linearGradient id="footer-favicon-gradient" x1="884" y1="634" x2="214" y2="328" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF4985" />
            <stop
              offset="0.567308"
              class="transition-[stop-color] duration-300 [stop-color:black] group-hover:[stop-color:#FF4985]"
            />
          </linearGradient>
        </defs>
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

    <a
      href="/contact/"
      class="pill unset-link text-social leading-[1.1] decoration-[0.06em] underline-offset-[0.12em]"
    >
      Contact Me
    </a>
  </div>

  <div
    class="mt-[clamp(1.35rem,2.7vw,2.1rem)] flex flex-col items-center gap-y-1 pt-4 text-sm text-neutral-500 sm:flex-row sm:justify-between"
  >
    <p>&copy; 2026 LogolicusZ</p>
    <a
      href="/legal/"
      style="--accent: var(--color-accent-pink)"
      class="unset-link no-underline transition-colors hover:text-[var(--accent)]"
    >
      Privacy Policy
    </a>
  </div>
</footer>
