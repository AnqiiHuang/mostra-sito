<script lang="ts">
	import { mapContent, mapStops } from '$lib/data/exhibition';
	import { homeSection } from '$lib/paths';
</script>

<section class="map-section" id="mappa" aria-labelledby="map-title">
	<header class="map-head">
		<p class="eyebrow">{mapContent.eyebrow}</p>
		<h2 class="title" id="map-title">{mapContent.title}</h2>
		<p class="lead">{mapContent.lead}</p>
	</header>

	<div class="map-panel" role="img" aria-label="Mappa statica del percorso espositivo in sei tappe">
		<svg viewBox="0 0 1000 520" class="map-svg" aria-hidden="true">
			<rect width="1000" height="520" fill="#fafafa" />
			<path
				d="M 120 380 C 200 340, 280 300, 360 260 S 520 180, 600 150 S 760 120, 860 90"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-dasharray="6 8"
				opacity="0.35"
			/>
			{#each mapStops as stop (stop.tappaId)}
				<circle
					cx={stop.x * 10}
					cy={stop.y * 5.2}
					r="14"
					fill="#fff"
					stroke="currentColor"
					stroke-width="1.5"
				/>
				<text
					x={stop.x * 10}
					y={stop.y * 5.2 + 5}
					text-anchor="middle"
					font-size="14"
					fill="currentColor"
					font-family="var(--font-sans)"
				>
					{stop.number}
				</text>
			{/each}
		</svg>

		<ol class="map-legend">
			{#each mapStops as stop (stop.tappaId)}
				<li>
					<a href={homeSection(`#${stop.tappaId}`)}>
						<span class="num">{String(stop.number).padStart(2, '0')}</span>
						<span class="label">{stop.label}</span>
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.map-section {
		padding: var(--space-2xl) var(--space-md);
		border-top: 1px solid var(--color-border);
		background: #fff;
	}

	.map-head {
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
		font-size: clamp(2rem, 4vw, 2.75rem);
		font-weight: 500;
		line-height: 1.1;
	}

	.lead {
		margin: 0;
		max-width: 34rem;
		color: var(--color-text-muted);
		line-height: 1.65;
	}

	.map-panel {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: var(--space-xl);
		align-items: center;
		border: 1px solid var(--color-border);
		padding: var(--space-lg);
		background: #fff;
	}

	.map-svg {
		width: 100%;
		height: auto;
		color: var(--color-text);
	}

	.map-legend {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.map-legend a {
		display: flex;
		align-items: baseline;
		gap: var(--space-md);
		text-decoration: none;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--color-border);
		transition: opacity 0.2s ease;
	}

	.map-legend a:hover {
		opacity: 0.55;
		text-decoration: none;
	}

	.num {
		font-size: 0.72rem;
		letter-spacing: 0.2em;
		color: var(--color-text-muted);
		min-width: 2rem;
	}

	.label {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.map-panel {
			grid-template-columns: 1fr;
		}
	}
</style>
