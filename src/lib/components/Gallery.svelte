<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { galleryItems } from '$lib/data/site';
</script>

<section class="gallery-section" id="gallery" aria-labelledby="gallery-heading">
	<div class="wrap">
		<SectionHeading
			id="gallery-heading"
			eyebrow="Selezione"
			title="Galleria"
			subtitle="Griglia responsive: le immagini si adattano a mobile e desktop. Sostituisci i file in `src/lib/data/site.ts`."
		/>

		<ul class="grid">
			{#each galleryItems as item (item.id)}
				<li class="cell">
					<figure class="figure">
						<a class="thumb-link" href={item.src} target="_blank" rel="noreferrer noopener">
							<img
								class="thumb"
								src={item.src}
								alt={item.alt}
								width="800"
								height="1000"
								loading="lazy"
								decoding="async"
							/>
						</a>
						{#if item.caption}
							<figcaption class="caption">{item.caption}</figcaption>
						{/if}
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.gallery-section {
		padding: var(--space-2xl) var(--space-md);
	}

	.wrap {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--space-md);
	}

	.cell {
		grid-column: span 4;
		margin: 0;
	}

	@media (max-width: 1024px) {
		.cell {
			grid-column: span 6;
		}
	}

	@media (max-width: 600px) {
		.cell {
			grid-column: span 12;
		}
	}

	.figure {
		margin: 0;
		background: var(--color-bg-elevated);
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-soft);
		border: 1px solid var(--color-border);
	}

	.thumb-link {
		display: block;
		text-decoration: none;
	}

	.thumb-link:hover .thumb {
		transform: scale(1.02);
	}

	.thumb {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		transition: transform 0.45s ease;
	}

	.caption {
		padding: var(--space-sm) var(--space-md) var(--space-md);
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}
</style>
