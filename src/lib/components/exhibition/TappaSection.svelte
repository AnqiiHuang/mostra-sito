<script lang="ts">
	import type { Tappa } from '$lib/data/exhibition';
	import PhotoCarousel from './PhotoCarousel.svelte';

	type Props = {
		tappa: Tappa;
		reversed?: boolean;
	};

	let { tappa, reversed = false }: Props = $props();
</script>

<article
	class="tappa"
	class:reversed
	id={tappa.id}
	aria-labelledby={`${tappa.id}-title`}
>
	<header class="tappa-head">
		<p class="eyebrow">{tappa.eyebrow}</p>
		<h2 class="title" id="{tappa.id}-title">{tappa.title}</h2>
		<p class="lead">{tappa.lead}</p>
	</header>

	<div class="tappa-grid">
		<div class="col col-media">
			<div class="block">
				<p class="block-label">Fotografia</p>
				<PhotoCarousel photos={tappa.photos} label={`Foto · ${tappa.title}`} />
			</div>

			<div class="block spectrogram">
				<p class="block-label">Spettrogramma</p>
				<figure>
					<img
						src={tappa.spectrogram.src}
						alt={tappa.spectrogram.alt}
						loading="lazy"
						decoding="async"
					/>
					{#if tappa.spectrogram.caption}
						<figcaption>{tappa.spectrogram.caption}</figcaption>
					{/if}
				</figure>
			</div>
		</div>

		<div class="col col-text">
			<div class="block">
				<p class="block-label">Testo</p>
				<div class="prose">
					{#each tappa.paragraphs as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
				<ul class="keywords" aria-label="Parole chiave">
					{#each tappa.keywords as word}
						<li>{word}</li>
					{/each}
				</ul>
			</div>

			<div class="block audio-block">
				<p class="block-label">Sound design</p>
				<div class="audio-card">
					<p class="audio-title">{tappa.audio.title}</p>
					{#if tappa.audio.description}
						<p class="audio-desc">{tappa.audio.description}</p>
					{/if}
					<audio controls preload="metadata" src={tappa.audio.src}>
						<track kind="captions" />
					</audio>
				</div>
			</div>
		</div>
	</div>
</article>

<style>
	.tappa {
		padding: var(--space-2xl) var(--space-md);
		border-top: 1px solid var(--color-border);
	}

	.tappa-head {
		max-width: var(--max-width);
		margin: 0 auto var(--space-xl);
	}

	.eyebrow {
		margin: 0 0 var(--space-sm);
		font-size: 0.7rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.title {
		margin: 0 0 var(--space-md);
		font-family: var(--font-display);
		font-size: clamp(2.25rem, 5vw, 3.25rem);
		font-weight: 500;
		line-height: 1.08;
		letter-spacing: -0.03em;
	}

	.lead {
		margin: 0;
		max-width: 36rem;
		font-size: 1.1rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.tappa-grid {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: start;
	}

	.tappa.reversed .tappa-grid {
		direction: rtl;
	}

	.tappa.reversed .col {
		direction: ltr;
	}

	.block {
		margin-bottom: var(--space-xl);
	}

	.block:last-child {
		margin-bottom: 0;
	}

	.block-label {
		margin: 0 0 var(--space-sm);
		font-size: 0.65rem;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.spectrogram figure {
		margin: 0;
		border: 1px solid var(--color-border);
		background: #fafafa;
	}

	.spectrogram img {
		width: 100%;
		height: auto;
		display: block;
		filter: grayscale(100%) contrast(1.05);
	}

	.spectrogram figcaption {
		padding: var(--space-sm) var(--space-md);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
		border-top: 1px solid var(--color-border);
	}

	.prose p {
		margin: 0 0 var(--space-md);
		font-size: 0.98rem;
		line-height: 1.75;
		color: var(--color-text);
	}

	.prose p:last-child {
		margin-bottom: var(--space-md);
	}

	.keywords {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.keywords li {
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		padding: 0.35rem 0.65rem;
		border: 1px solid var(--color-border);
		color: var(--color-text-muted);
	}

	.audio-card {
		padding: var(--space-md);
		border: 1px solid var(--color-border);
		background: #fafafa;
	}

	.audio-title {
		margin: 0 0 0.25rem;
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 500;
	}

	.audio-desc {
		margin: 0 0 var(--space-md);
		font-size: 0.8rem;
		color: var(--color-text-muted);
		letter-spacing: 0.04em;
	}

	audio {
		width: 100%;
		height: 2.5rem;
	}

	@media (max-width: 900px) {
		.tappa-grid {
			grid-template-columns: 1fr;
		}

		.tappa.reversed .tappa-grid {
			direction: ltr;
		}
	}
</style>
