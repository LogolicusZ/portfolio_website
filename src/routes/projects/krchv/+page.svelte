<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from '$lib/utils/inview';
</script>

<section class="max-w-7xl mx-auto px-1 py-1">
  <div in:fly={{ y: 16, duration: 500 }}>
    <h1 class="text-6xl font-serif mb-6">krchv</h1>

    <p class="mb-8 text-lg leading-relaxed">
      Or, Keyboard Archive. <br>
      Pronounced: "Kay-Archive". <br>
     I wanted to have a space dedicated to one of my favorite hobbies which also acts as an archive in case I lose the original files.
     Additionally, I wanted to be less dependent on other services like Instagram (for image storage) and Notion (storage database of current items that I own).
     This page like, my main Website, is using <a href="https://svelte.dev/">SvelteKit</a> and <a href="https://tailwindcss.com/">Tailwindcss </a>.
    </p>
  </div>

  <img use:inview class="reveal rounded-sm" src="/assets/img/krchv_screenshot.avif" width="1973" height="1207" />

  <div use:inview class="reveal mt-8 space-y-3">
    <p class="text-m uppercase opacity-50">Links</p>
    <a
      href="https://krchv.logolicusz.com/"
      class="block  hover:underline">KRCHV - Website</a
    >
        <a
      href="https://github.com/LogolicusZ/krchv/"
      class="block  hover:underline">Github Repo</a
    >
  </div>
</section>
