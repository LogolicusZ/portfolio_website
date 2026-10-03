<script lang="ts">
  import Gallery from '$lib/components/Gallery.svelte';
  import { galleryImages as images } from '$lib/data/gallery';
</script>

<div class="-mx-gutter -mt-6">
  <Gallery {images} archive />
</div>
