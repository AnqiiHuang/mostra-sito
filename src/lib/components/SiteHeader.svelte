<script lang="ts">
	import { navLinks, siteMeta } from '$lib/data/site';
	import { homeSection } from '$lib/paths';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="header">
	<div class="inner">
		<a class="logo" href={homeSection('#intro')} onclick={closeMenu}>{siteMeta.shortTitle}</a>

		<button
			type="button"
			class="menu-toggle"
			aria-expanded={menuOpen}
			aria-controls="site-nav"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="sr-only">Apri o chiudi menu</span>
			<span class="bar" class:open={menuOpen}></span>
			<span class="bar" class:open={menuOpen}></span>
		</button>

		<nav id="site-nav" class="nav" class:open={menuOpen} aria-label="Sezioni principali">
			{#each navLinks as link (link.href)}
				<a href={homeSection(link.href)} class="nav-link" onclick={closeMenu}>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in srgb, var(--color-bg) 88%, transparent);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-border);
	}

	.inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--space-md);
		height: var(--header-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.logo {
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-decoration: none;
	}

	.logo:hover {
		text-decoration: none;
		opacity: 0.75;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: none;
		background: transparent;
		cursor: pointer;
		color: var(--color-text);
	}

	.bar {
		display: block;
		height: 2px;
		width: 100%;
		background: currentColor;
		transition: transform 0.2s ease, opacity 0.2s ease;
		transform-origin: center;
	}

	.bar.open:first-child {
		transform: translateY(4px) rotate(45deg);
	}

	.bar.open:last-child {
		transform: translateY(-4px) rotate(-45deg);
	}

	.nav {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
	}

	.nav-link {
		font-size: 0.875rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--color-text-muted);
	}

	.nav-link:hover {
		color: var(--color-text);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.menu-toggle {
			display: flex;
		}

		.nav {
			position: fixed;
			inset: var(--header-height) 0 0 0;
			flex-direction: column;
			align-items: flex-start;
			padding: var(--space-lg) var(--space-md);
			background: var(--color-bg);
			border-bottom: 1px solid var(--color-border);
			gap: var(--space-md);
			transform: translateY(-100%);
			opacity: 0;
			pointer-events: none;
			transition:
				transform 0.25s ease,
				opacity 0.25s ease;
		}

		.nav.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: auto;
		}

		.nav-link {
			font-size: 1rem;
		}
	}
</style>
