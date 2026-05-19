<script lang="ts">
	type Props = {
		id?: string;
		eyebrow?: string;
		title: string;
		subtitle?: string;
	};

	let { id, eyebrow, title, subtitle }: Props = $props();
</script>

<header class="section-heading" {id}>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	<h2 class="title">{title}</h2>
	{#if subtitle}
		<p class="subtitle">{subtitle}</p>
	{/if}
</header>

<style>
	.section-heading {
		max-width: 40rem;
		margin-bottom: var(--space-xl);
	}

	.eyebrow {
		margin: 0 0 var(--space-sm);
		font-size: 0.75rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.title {
		margin: 0 0 var(--space-sm);
		font-family: var(--font-display);
		font-size: clamp(2rem, 4vw, 2.75rem);
		font-weight: 500;
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.subtitle {
		margin: 0;
		color: var(--color-text-muted);
		font-size: 1.05rem;
		max-width: 32rem;
	}
</style>
