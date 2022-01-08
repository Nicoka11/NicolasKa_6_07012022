<script>
	import LikeCount from './LikeCount.svelte';
	export let media, toggleLightBox, setPostId;
</script>

<div class="post">
	<div
		class="content"
		on:click={(e) => {
			toggleLightBox();
			setPostId(media)
		}}
	>
		<img src={`../static/content/${media.image}`} alt={media.title} loading="lazy" id={media.id} />
	</div>
	<div class="info">
		<p>{media.title}</p>
		<LikeCount count={media.likes} />
	</div>
</div>

<style lang="scss">
	.post {
		width: 21.875rem;
	}
	.content {
		height: 18.75rem;
		overflow: hidden;
		margin-bottom: 0.5rem;
		border-radius: 5px;
		cursor: pointer;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	.info {
		color: var(--c-main);
		display: flex;
		justify-content: space-between;
	}
</style>
