<script lang="ts">
	import type { ExhibitionPhoto } from '$lib/data/exhibition';

	type Props = {
		photos: ExhibitionPhoto[];
		label: string;
	};

	let { photos, label }: Props = $props();

	let index = $state(0);

	const total = $derived(photos.length);
	function goTo(i: number) {
		index = ((i % total) + total) % total;
	}

	function prev() {
		goTo(index - 1);
	}

	function next() {
		goTo(index + 1);
	}

</script>

<div class="carousel" role="region" aria-roledescription="carousel" aria-label={label}>
	<div class="viewport">
		{#each photos as photo, i (photo.src)}
			<figure class="slide" class:active={i === index} aria-hidden={i !== index}>
				<img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
				{#if photo.caption}
					<figcaption>{photo.caption}</figcaption>
				{/if}
			</figure>
		{/each}
	</div>

	{#if total > 1}
		<div class="controls">
			<button type="button" class="nav-btn" onclick={prev} aria-label="Foto precedente">←</button>
			<div class="dots" role="tablist" aria-label="Seleziona foto">
				{#each photos as photo, i (photo.src)}
					<button
						type="button"
						class="dot"
						class:active={i === index}
						role="tab"
						aria-selected={i === index}
						aria-label={`Foto ${i + 1} di ${total}`}
						onclick={() => goTo(i)}
					></button>
				{/each}
			</div>
			<button type="button" class="nav-btn" onclick={next} aria-label="Foto successiva">→</button>
		</div>
		<p class="counter" aria-live="polite">
			<span class="sr-only">Foto </span>{index + 1}
			<span aria-hidden="true"> / </span>
			<span class="sr-only">di </span>{total}
		</p>
	{/if}
</div>

<style>
	.carousel {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.viewport {
		position: relative;
		aspect-ratio: 4 / 3;
		background: #fafafa;
		border: 1px solid var(--color-border);
		overflow: hidden;
	}

	.slide {
		position: absolute;
		inset: 0;
		margin: 0;
		opacity: 0;
		transition: opacity 0.55s ease;
		pointer-events: none;
	}

	.slide.active {
		opacity: 1;
		pointer-events: auto;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slide figcaption {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: var(--space-sm) var(--space-md);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #fff;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
	}

	.controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-sm);
	}

	.nav-btn {
		flex: 0 0 auto;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--color-border);
		background: #fff;
		color: var(--color-text);
		font-size: 1rem;
		cursor: pointer;
		transition: border-color 0.2s ease;
	}

	.nav-btn:hover {
		border-color: var(--color-text);
	}

	.dots {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.4rem;
		flex: 1;
	}

	.dot {
		width: 0.45rem;
		height: 0.45rem;
		padding: 0;
		border: 1px solid var(--color-text-muted);
		border-radius: 50%;
		background: transparent;
		cursor: pointer;
	}

	.dot.active {
		background: var(--color-text);
		border-color: var(--color-text);
	}

	.counter {
		margin: 0;
		text-align: center;
		font-size: 0.7rem;
		letter-spacing: 0.2em;
		color: var(--color-text-muted);
	}
</style>
