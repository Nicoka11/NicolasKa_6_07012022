<script>
	import { userMedia } from '../store';
	export let increment = false,
		mediaId, totalLikes = null;

	let isLiked = false;

	let mediaIndex = $userMedia.findIndex((media) => media.id == mediaId);
	let media = $userMedia.find((media) => media.id == mediaId);

	function onLike() {
		let medias = [...$userMedia];
		isLiked ? media.likes-- : media.likes++;
		isLiked = !isLiked
		medias[mediaIndex] = media;
		userMedia.set(medias)
	}
</script>

{#if increment}
	<button class:isLiked class="likes-count" on:click={onLike}>
		<p>{media.likes}</p>
		<span class="material-icons"> favorite </span>
	</button>
{:else}
	<div class="likes-count">
		<p>{totalLikes}</p>
		<span class="material-icons"> favorite </span>
	</div>
{/if}

<style lang="scss">
	.likes-count {
		display: flex;
		gap: 0.3rem;
		cursor: pointer;
		align-items: center;
		border: none;
		outline: none;
		color: inherit;
		background-color: inherit;
		font-size: inherit;
	}

	.isLiked {
		color: var(--c-main-active);
	}
</style>
