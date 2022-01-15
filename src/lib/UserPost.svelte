<script>
	import LikeCount from './LikeCount.svelte';
	export let media, toggleLightBox, setPostId;
</script>

<article aria-label="Post">
	<div
		class="content"
		on:click={(e) => {
			toggleLightBox();
			setPostId(media);
		}}
	>
		{#if media.image}
			<img src={`/content/${media.image}`} alt={media.title} loading="lazy" id={media.id} />
		{:else}
			<video src={`/content/${media.video}`}/>
		{/if}
	</div>
	<div class="info">
		<p aria-label="Titre du post">{media.title}</p>
		<LikeCount count={media.likes} liked={media.liked} increment />
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
