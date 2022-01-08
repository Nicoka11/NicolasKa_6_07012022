<script>
	import LikeCount from './LikeCount.svelte';
	export let media;
</script>

<div class="post">
	<div class="content" on:click={e => console.log(e.target)}>
		<img src={`../static/content/${media.image}`} alt={media.title} />
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
		margin-bottom: .5rem;
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
