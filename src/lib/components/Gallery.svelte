<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { initPhotoSwipe } from '$lib/photoswipe';
	import { inview } from '$lib/utils/inview';

	type Image = {
		src: string;
		width: number;
		height: number;
		alt?: string;
	};

	export let images: Image[];
	export let hero: Image | null = null;

	let galleryEl: HTMLDivElement;
	let destroyLightbox: (() => void) | null = null;
	let columnCount = 3;

	function computeColumnCount() {
		const w = window.innerWidth;
		columnCount = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
	}

	function distribute(imgs: typeof images, count: number) {
		const columns: (typeof images)[] = Array.from({ length: count }, () => []);
		const heights = new Array(count).fill(0);
		for (const image of imgs) {
			let shortest = 0;
			for (let i = 1; i < count; i++) {
				if (heights[i] < heights[shortest]) shortest = i;
			}
			columns[shortest].push(image);
			heights[shortest] += image.height / image.width;
		}
		return columns;
	}

	$: columns = distribute(images, columnCount);

	onMount(() => {
		computeColumnCount();
		window.addEventListener('resize', computeColumnCount);
		destroyLightbox = initPhotoSwipe(galleryEl);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', computeColumnCount);
		}
		destroyLightbox?.();
		destroyLightbox = null;
	});
</script>

{#if (images && images.length > 0) || hero}
	<div class="mt-6" bind:this={galleryEl}>
		{#if hero}
			<a
				use:inview
				href={hero.src}
				data-pswp-width={hero.width}
				data-pswp-height={hero.height}
				target="_blank"
				class="reveal mb-4 block"
			>
				<img
					src={hero.src}
					alt={hero.alt}
					width={hero.width}
					height={hero.height}
					class="block w-full cursor-zoom-in rounded-sm transition-transform hover:scale-[0.995]"
				/>
			</a>
		{/if}
		<div class="flex gap-4">
			{#each columns as column}
				<div class="flex flex-1 flex-col gap-4">
					{#each column as image}
						<a
							use:inview
							href={image.src}
							data-pswp-width={image.width}
							data-pswp-height={image.height}
							target="_blank"
							class="reveal block"
						>
							<img
								src={image.src}
								alt={image.alt}
								width={image.width}
								height={image.height}
								loading="lazy"
								class="block w-full cursor-zoom-in rounded-sm transition-transform hover:scale-[0.985]"
							/>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}
