<script>
	import { userMedia } from '../store';
	import LikeCount from './LikeCount.svelte';

	export let price;

	$: totalLikes =
		$userMedia.map((media) => media.likes).reduce((prev, current) => prev + current)
</script>

<div class="user-info">
	<LikeCount {totalLikes} />
	<p>{`${price}€ / jour`}</p>
</div>

<style>
	.user-info {
		display: flex;
        align-items: center;
		position: fixed;
		bottom: 0;
		right: 5rem;
		padding: 1rem;
		background-color: var(--c-main-light);
		border-radius: 5px 5px 0 0;
	}

	p {
		margin-left: 2rem;
	}
</style>
