<script>
	import { userMedia } from '../store';
	import UserPost from './UserPost.svelte';
	export let toggleLightBox, setPostId;
</script>

<section class="media-grid">
	{#each $userMedia as media}
		<UserPost {media} {toggleLightBox} {setPostId} />
	{/each}
</section>

<style>
	.media-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 4rem;
		row-gap: 2.5rem;
		margin: 0 auto 5rem;
		width: fit-content;
	}
</style>
