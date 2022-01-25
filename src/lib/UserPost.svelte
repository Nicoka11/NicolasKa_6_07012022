<script>
	import LikeCount from './LikeCount.svelte';
	export let media, toggleLightBox, setPostId;
</script>

<article aria-label="Post">
	<button
		class="content"
		on:click={() => {
			toggleLightBox();
			setPostId(media);
		}}
	>
		{#if media.image}
			<img src={`/compact/${media.image}`} alt={media.title} loading="lazy" id={media.id} />
		{:else}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video src={`/content/${media.video}`} alt={media.title} />
		{/if}
	</button>
	<div class="info">
		<p aria-label="Titre du post">{media.title}</p>
		<LikeCount mediaId={media.id} increment />
	</div>
</article>

<style lang="scss">
	article {
		width: 21.875rem;
	}

	.content {
		height: 18.75rem;
		overflow: hidden;
		margin-bottom: 0.8rem;
		border-radius: 5px;
		border-color: transparent;
		border-width: 0;
		padding: 0;
		color: inherit;
		background-color: inherit;
		font-size: inherit;
		width: 100%;
		cursor: pointer;

		img,
		video {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	.info {
		color: var(--c-main);
		font-size: 1.1rem;
		display: flex;
		justify-content: space-between;
	}
</style>
