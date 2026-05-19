<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { projects } from '$lib/data/site';
	import { homeSection } from '$lib/paths';
</script>

<section class="projects-section" id="projects" aria-labelledby="projects-heading">
	<div class="wrap">
		<SectionHeading
			id="projects-heading"
			eyebrow="Lavori"
			title="Progetti"
			subtitle="Ogni scheda riassume un lavoro: titolo, anno e breve descrizione. Aggiungi o rimuovi voci in `site.ts`."
		/>

		<ul class="list">
			{#each projects as project (project.id)}
				<li class="card">
					<div class="media">
						<img
							src={project.imageSrc}
							alt={project.imageAlt}
							width="900"
							height="600"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div class="body">
						<p class="meta">
							{project.tagline}
							{#if project.year}
								<span class="dot" aria-hidden="true">·</span>
								<span>{project.year}</span>
							{/if}
						</p>
						<h3 class="title">{project.title}</h3>
						<p class="desc">{project.description}</p>
						{#if project.href}
							<a class="link" href={homeSection(project.href)}>Apri dettaglio</a>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.projects-section {
		padding: var(--space-2xl) var(--space-md);
		background: linear-gradient(180deg, transparent, var(--color-accent-soft));
	}

	.wrap {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.card {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		gap: var(--space-lg);
		align-items: center;
		background: var(--color-bg-elevated);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		overflow: hidden;
		box-shadow: var(--shadow-soft);
	}

	.media img {
		width: 100%;
		height: 100%;
		min-height: 220px;
		object-fit: cover;
	}

	.body {
		padding: var(--space-lg) var(--space-lg) var(--space-lg) 0;
	}

	.meta {
		margin: 0 0 var(--space-sm);
		font-size: 0.75rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.dot {
		margin: 0 0.35rem;
	}

	.title {
		margin: 0 0 var(--space-sm);
		font-family: var(--font-display);
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 500;
	}

	.desc {
		margin: 0 0 var(--space-md);
		color: var(--color-text-muted);
		max-width: 36rem;
	}

	.link {
		font-size: 0.8rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 2px;
	}

	.link:hover {
		border-bottom-color: var(--color-accent);
	}

	@media (max-width: 800px) {
		.card {
			grid-template-columns: 1fr;
		}

		.body {
			padding: var(--space-md) var(--space-lg) var(--space-lg);
		}

		.media img {
			min-height: 200px;
			max-height: 280px;
		}
	}
</style>
