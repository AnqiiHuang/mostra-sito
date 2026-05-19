<script lang="ts">
	import { siteMeta } from '$lib/data/site';
	import { homeSection } from '$lib/paths';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="inner">
		<p class="copy">© {year} {siteMeta.author}. Tutti i diritti riservati.</p>
		<a class="top" href={homeSection('#hero')}>Torna su</a>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--color-border);
		padding: var(--space-lg) var(--space-md);
		margin-top: var(--space-2xl);
	}

	.inner {
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.copy {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.top {
		font-size: 0.8rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--color-text-muted);
	}

	.top:hover {
		color: var(--color-text);
	}
</style>
