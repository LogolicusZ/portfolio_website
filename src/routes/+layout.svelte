<script lang="ts">
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>logolicusz</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://logolicusz.com/" />
  <meta property="og:title" content="Home" />
  <meta
    property="og:description"
    content="Hi! Im Logolicus and I like to make stuff!"
  />
  <meta property="og:image" content="/assets/img/preview.avif" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="httlogolicusz.com/" />
  <meta property="twitter:title" content="Home" />
  <meta
    property="twitter:description"
    content="Hi! Im Logolicus and I like to make stuff!!"
  />
  <meta property="twitter:image" content="/assets/img/preview.avif" />
</svelte:head>

<div class="flex min-h-dvh flex-col scroll-smooth">
  <SiteHeader />

  <main class="mt-block px-gutter flex-1">
    {@render children()}
  </main>

  <SiteFooter />
</div>
