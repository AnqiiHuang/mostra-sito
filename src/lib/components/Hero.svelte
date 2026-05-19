<script lang="ts">
	import { heroContent } from '$lib/data/site';
	import { homeSection } from '$lib/paths';
</script>

<section class="hero" id="hero" aria-labelledby="hero-title">
	<div class="hero-inner">
		<p class="eyebrow">{heroContent.eyebrow}</p>
		<h1 id="hero-title" class="title">{heroContent.headline}</h1>
		<p class="subtitle">{heroContent.subtitle}</p>
		<div class="actions">
			<a class="btn btn-primary" href={homeSection(heroContent.primaryCta.href)}>{heroContent.primaryCta.label}</a>
			<a class="btn btn-ghost" href={homeSection(heroContent.secondaryCta.href)}>{heroContent.secondaryCta.label}</a>
		</div>
	</div>
	<div class="hero-visual" aria-hidden="true">
		<div class="frame"></div>
		<div class="orb"></div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: min(78vh, 640px);
		display: grid;
		align-items: center;
		padding: var(--space-2xl) var(--space-md) var(--space-xl);
		overflow: hidden;
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		max-width: var(--max-width);
		margin: 0 auto;
		width: 100%;
	}

	.eyebrow {
		margin: 0 0 var(--space-sm);
		font-size: 0.75rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.title {
		margin: 0 0 var(--space-md);
		font-family: var(--font-display);
		font-size: clamp(2.75rem, 7vw, 4.5rem);
		font-weight: 500;
		line-height: 1.05;
		letter-spacing: -0.03em;
		max-width: 14ch;
	}

	.subtitle {
		margin: 0 0 var(--space-xl);
		max-width: 28rem;
		font-size: 1.1rem;
		color: var(--color-text-muted);
		line-height: 1.65;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 1.35rem;
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 999px;
		border: 1px solid transparent;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease;
	}

	.btn-primary {
		background: var(--color-accent);
		color: var(--color-bg);
	}

	.btn-primary:hover {
		background: #1a1816;
		text-decoration: none;
	}

	.btn-ghost {
		border-color: var(--color-border);
		color: var(--color-text);
		background: transparent;
	}

	.btn-ghost:hover {
		border-color: var(--color-accent);
		text-decoration: none;
	}

	.hero-visual {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.frame {
		position: absolute;
		right: 6%;
		top: 18%;
		width: min(42vw, 420px);
		aspect-ratio: 3 / 4;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		opacity: 0.85;
	}

	.orb {
		position: absolute;
		right: 12%;
		bottom: 10%;
		width: min(28vw, 260px);
		height: min(28vw, 260px);
		border-radius: 50%;
		background: radial-gradient(circle at 30% 30%, #e8e2da, #cfc6bb 55%, transparent 70%);
		filter: blur(0px);
		opacity: 0.55;
	}

	@media (max-width: 768px) {
		.frame {
			right: -8%;
			top: 8%;
			opacity: 0.45;
		}

		.orb {
			right: -5%;
			opacity: 0.35;
		}
	}
</style>
