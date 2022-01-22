<script>
	import CtaButton from '$lib/CtaButton.svelte';
	export let user, ctaClickHandler;
</script>

<section class="user-details" aria-hidden="true">
	<div class="description">
		<h1 class="name">{user.name}</h1>
		<p class="location">{`${user.city}, ${user.country}`}</p>
		<p class="tagline">{user.tagline}</p>
	</div>
	<CtaButton value="Contactez-moi" clickHandler={ctaClickHandler} />
	<div class="image">
		<img src={`../../static/id/${user.portrait}`} alt={`${user.name} profile picture`} />
	</div>
</section>

<style lang="scss">
	.user-details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem;
		background-color: var(--c-details-background);
		margin-bottom: 1rem;
	}
	.name {
		color: var(--c-title);
		font-size: 2.25rem;
		line-height: 1;
		margin-bottom: 0.7rem;
	}

	.location {
		color: var(--c-main);
		font-size: 1.5rem;
		margin-bottom: 0.7rem;
	}

	.tagline {
		color: var(--c-caption);
		font-size: 1.125rem;
	}

	.image {
		width: 12.5rem;
		height: 12.5rem;
		border-radius: 50%;
		overflow: hidden;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
</style>
