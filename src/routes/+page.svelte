<script lang="ts">
	import { onMount } from 'svelte';
	import ExhibitionMap from '$lib/components/exhibition/ExhibitionMap.svelte';
	import TappaSection from '$lib/components/exhibition/TappaSection.svelte';
	import { exhibitionMeta, tappe } from '$lib/data/exhibition';

	let root: HTMLElement | undefined = $state();

	onMount(() => {
		if (!root) return;

		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReduced) {
			root.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);

		root.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<div class="exhibition" bind:this={root}>
	<section class="intro reveal is-visible" id="intro" aria-labelledby="exhibition-title">
		<p class="intro-eyebrow">{exhibitionMeta.themes.join(' · ')}</p>
		<h1 id="exhibition-title" class="intro-title">{exhibitionMeta.title}</h1>
		<div class="intro-copy">
			{#each exhibitionMeta.intro as line}
				<p>{line}</p>
			{/each}
		</div>
		<p class="intro-scroll" aria-hidden="true">Scorri ↓</p>
	</section>

	<nav class="progress reveal" aria-label="Progressione tappe">
		<ol>
			{#each tappe as tappa (tappa.id)}
				<li>
					<a href="#{tappa.id}">
						<span class="progress-num">{String(tappa.number).padStart(2, '0')}</span>
						<span class="progress-label">{tappa.title}</span>
					</a>
				</li>
			{/each}
			<li>
				<a href="#mappa">
					<span class="progress-num">—</span>
					<span class="progress-label">Mappa</span>
				</a>
			</li>
		</ol>
	</nav>

	{#each tappe as tappa, i (tappa.id)}
		<div class="reveal">
			<TappaSection {tappa} reversed={i % 2 === 1} />
		</div>
	{/each}

	<div class="reveal">
		<ExhibitionMap />
	</div>
</div>

<style>
	.exhibition {
		--color-bg: #ffffff;
		--color-bg-elevated: #ffffff;
		background: #ffffff;
		color: var(--color-text);
	}

	.intro {
		min-height: min(88vh, 760px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--space-2xl) var(--space-md);
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.intro-eyebrow {
		margin: 0 0 var(--space-lg);
		font-size: 0.68rem;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.intro-title {
		margin: 0 0 var(--space-xl);
		font-family: var(--font-display);
		font-size: clamp(3rem, 9vw, 5.5rem);
		font-weight: 500;
		line-height: 0.98;
		letter-spacing: -0.04em;
		max-width: 12ch;
	}

	.intro-copy {
		max-width: 32rem;
	}

	.intro-copy p {
		margin: 0 0 var(--space-md);
		font-size: 1.05rem;
		line-height: 1.75;
		color: var(--color-text-muted);
	}

	.intro-copy p:last-child {
		margin-bottom: 0;
	}

	.intro-scroll {
		margin: var(--space-2xl) 0 0;
		font-size: 0.7rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.progress {
		position: sticky;
		top: var(--header-height);
		z-index: 5;
		background: color-mix(in srgb, #ffffff 92%, transparent);
		backdrop-filter: blur(10px);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	.progress ol {
		display: flex;
		gap: 0;
		margin: 0 auto;
		padding: 0 var(--space-md);
		max-width: var(--max-width);
		list-style: none;
	}

	.progress a {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 0.75rem 1rem;
		text-decoration: none;
		white-space: nowrap;
		border-right: 1px solid var(--color-border);
		transition: background 0.2s ease;
	}

	.progress li:first-child a {
		padding-left: 0;
	}

	.progress a:hover {
		background: rgba(0, 0, 0, 0.03);
		text-decoration: none;
	}

	.progress-num {
		font-size: 0.62rem;
		letter-spacing: 0.22em;
		color: var(--color-text-muted);
	}

	.progress-label {
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.reveal {
		opacity: 0;
		transform: translateY(1.75rem);
		transition:
			opacity 0.9s ease,
			transform 0.9s ease;
	}

	.reveal.is-visible {
		opacity: 1;
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.reveal {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
