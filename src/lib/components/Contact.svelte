<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { contactContent } from '$lib/data/site';

	const mailHref = `mailto:${contactContent.email}`;
</script>

<section class="contact-section" id="contact" aria-labelledby="contact-heading">
	<div class="wrap">
		<SectionHeading
			id="contact-heading"
			eyebrow="Scrivimi"
			title={contactContent.heading}
			subtitle={contactContent.intro}
		/>

		<div class="grid">
			<div class="block">
				<p class="label">Email</p>
				<a class="email" href={mailHref}>{contactContent.email}</a>
				<p class="hint">Sostituisci l’indirizzo in `src/lib/data/site.ts`.</p>
			</div>
			<div class="block">
				<p class="label">Social</p>
				<ul class="social">
					{#each contactContent.social as item}
						<li>
							<a href={item.href} target="_blank" rel="noreferrer noopener">{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		padding: var(--space-2xl) var(--space-md) var(--space-xl);
	}

	.wrap {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-xl);
	}

	.block {
		padding: var(--space-lg);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-soft);
	}

	.label {
		margin: 0 0 var(--space-sm);
		font-size: 0.7rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.email {
		font-family: var(--font-display);
		font-size: clamp(1.35rem, 2.5vw, 1.85rem);
		font-weight: 500;
		text-decoration: none;
		word-break: break-word;
	}

	.email:hover {
		text-decoration: underline;
	}

	.hint {
		margin: var(--space-md) 0 0;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.social {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.social a {
		text-decoration: none;
		font-size: 1rem;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 2px;
		display: inline-block;
		width: fit-content;
	}

	.social a:hover {
		border-bottom-color: var(--color-accent);
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
