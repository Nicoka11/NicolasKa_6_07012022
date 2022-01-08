<script>
	import { page } from '$app/stores';
	import * as data from '../../../static/photographers.json';
	import Photo from '$lib/Photo.svelte';
import UserDetails from '$lib/UserDetails.svelte';

	let mediaList = data.media.filter((media) => media.photographerId == $page.params.slug);
	let user = data.photographers.filter((user) => user.id == $page.params.slug)[0];
</script>
<main>
	<UserDetails {user}/>
	<div class="sorting">
		<p>Trier par</p>
	</div>
	<section>
		{#each mediaList as media}
		<Photo {media} user={user.name} />
		{/each}
	</section>
</main>

<style>
	main {
		width: min-content;
		margin: 0 auto;
	}
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 4rem;
		row-gap: 2.5rem;
		margin: 0 auto 5rem;
		width: fit-content;
	}
	.sorting {
		display: flex;
	}
</style>