<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { aboutContent } from '$lib/data/site';
</script>

<section class="about-section" id="about" aria-labelledby="about-heading">
	<div class="wrap">
		<div class="grid">
			<div class="intro">
				<SectionHeading
					id="about-heading"
					eyebrow="Profilo"
					title={aboutContent.heading}
					subtitle={aboutContent.lead}
				/>
				{#each aboutContent.paragraphs as paragraph}
					<p class="text">{paragraph}</p>
				{/each}
			</div>
			<aside class="aside" aria-label="Specializzazioni">
				<ul class="tags">
					{#each aboutContent.highlights as tag}
						<li class="tag">{tag}</li>
					{/each}
				</ul>
				<div class="panel">
					<p class="panel-label">Disponibilità</p>
					<p class="panel-text">Commissioni 2026 — finestre limitate. Scrivimi con concept e tempistiche.</p>
				</div>
			</aside>
		</div>
	</div>
</section>

<style>
	.about-section {
		padding: var(--space-2xl) var(--space-md);
	}

	.wrap {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
		gap: var(--space-xl);
		align-items: start;
	}

	.intro :global(.section-heading) {
		margin-bottom: var(--space-lg);
	}

	.text {
		margin: 0 0 var(--space-md);
		max-width: 36rem;
		color: var(--color-text-muted);
	}

	.aside {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.tags {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.tag {
		padding: 0.45rem 0.85rem;
		border-radius: 999px;
		border: 1px solid var(--color-border);
		font-size: 0.8rem;
		letter-spacing: 0.06em;
		background: var(--color-bg-elevated);
	}

	.panel {
		padding: var(--space-lg);
		border-radius: var(--radius-md);
		background: var(--color-accent);
		color: var(--color-bg);
	}

	.panel-label {
		margin: 0 0 var(--space-sm);
		font-size: 0.7rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		opacity: 0.85;
	}

	.panel-text {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.55;
		opacity: 0.95;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
