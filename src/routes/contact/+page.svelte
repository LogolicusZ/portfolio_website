<script>
  import { inview } from '$lib/utils/inview';

  const contact = {
    instagram: '@logolicusz.kb',
    discord: 'logolicusz'
  };

  // One style for every value on this page, so the email cannot drift
  // out of step with the rest.
  const value = 'block wrap-break-word text-2xl font-medium sm:text-3xl';
  const label = 'text-sm tracking-[0.2em] text-neutral-500 uppercase';
  const note = 'mt-1.5 text-base text-neutral-500';
</script>

<section class="mx-auto flex max-w-3xl flex-col items-center pb-8 text-center">
  <h1 use:inview class="reveal font-serif text-5xl tracking-tight sm:text-6xl">Contact Me</h1>

  <p
    use:inview={100}
    class="reveal mt-6 max-w-xl text-lg leading-relaxed text-pretty text-neutral-500 sm:text-xl"
  >
    Have a project, collaboration idea, or just want to say hello? Reach out through any of the
    platforms below.
  </p>

  <div class="mt-[clamp(3rem,7vw,4.5rem)] w-full space-y-10">
    <div use:inview class="reveal">
      <h2 class={label}>Email</h2>
      <!-- Unchanged behind the scenes: the hidden spans break the address up so
           it reads correctly on screen but never forms a matchable
           user@domain.tld string in the markup. -->
      <span class={value}
        >logol<b class="hidden"
          >ASDÖFKLJASVD09N3NQIUPWRBÖAÖLSBJLLDVsadlfnasdcn823bröaföasdöfhsdca0saüodibdsaf</b
        >icusz@<b class="hidden">qpwfhpq8vnpq9w849pP@asdhfo239f8zhap0whecpbvp9A83F8PBFAEF</b
        >gmail.com</span
      >
      <p class={note}>Best for professional inquiries.</p>
    </div>

    <div use:inview={80} class="reveal">
      <h2 class={label}>Instagram</h2>
      <a
        href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        style="--accent: var(--color-accent-grass)"
        class="unset-link {value} no-underline transition-colors duration-200 hover:text-[var(--accent)]"
      >
        {contact.instagram}
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
      <p class={note}>DM me for quick conversations.</p>
    </div>

    <div use:inview={160} class="reveal">
      <h2 class={label}>Discord</h2>
      <span class={value}>{contact.discord}</span>
      <p class={note}>Ideal for ongoing collaboration.</p>
    </div>
  </div>
</section>
