<script>
	import { userMedia } from '../store';
	export let increment = false,
		mediaId,
		totalLikes = null;

	let isLiked = false;

	$: mediaIndex = $userMedia.findIndex((media) => media.id == mediaId);
	$: media = $userMedia.find((media) => media.id == mediaId);

	function onLike() {
		let medias = [...$userMedia];
		isLiked ? media.likes-- : media.likes++;
		isLiked = !isLiked;
		medias[mediaIndex] = media;
		userMedia.set(medias);
	}
</script>

{#if increment}
	<button class:isLiked class="likes-count clickable" on:click={onLike} aria-label="likes">
		<p>{media.likes}</p>
		<span class="material-icons" aria-hidden="true"> favorite </span>
	</button>
{:else}
	<div class="likes-count">
		<p>{totalLikes}</p>
		<span class="material-icons" aria-hidden="true"> favorite </span>
	</div>
{/if}

<style lang="scss">
	.likes-count {
		display: flex;
		gap: 0.3rem;
		align-items: center;
		border: none;	
		color: inherit;
		background-color: inherit;
		font-size: inherit;
	}

	.clickable {
		cursor: pointer;
	}

	.isLiked {
		color: var(--c-main-active);
	}
</style>
