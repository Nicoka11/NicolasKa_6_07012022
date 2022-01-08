<script>
	import { page } from '$app/stores';
	import * as data from '../../../static/photographers.json';
	import Photo from '$lib/Photo.svelte';
	import UserDetails from '$lib/UserDetails.svelte';
	import UserInfo from '$lib/UserInfo.svelte';
	import ContactForm from '$lib/ContactForm.svelte';

	let mediaList = data.media.filter((media) => media.photographerId == $page.params.slug);
	let user = data.photographers.filter((user) => user.id == $page.params.slug)[0];
	let totalLikes = mediaList.map((media) => media.likes).reduce((prev, current) => prev + current);

	let isContactFormOpen = false;

	function toggleContactForm() {
		isContactFormOpen = isContactFormOpen ? false : true;
	}
</script>

<main>
	{#if isContactFormOpen}
		<div class="form-container" on:click={toggleContactForm}>
			<ContactForm {user} />
		</div>
	{/if}
	<UserDetails {user} ctaClickHandler={toggleContactForm} />
	<div class="sorting">
		<p>Trier par</p>
	</div>
	<section class="media-grid">
		{#each mediaList as media}
			<Photo {media}/>
		{/each}
	</section>
	<UserInfo likeCount={totalLikes} price={user.price} />
</main>

<style>
	.form-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(196, 196, 196, 0.4);
		z-index: 10;
	}
	main {
		width: min-content;
		margin: 0 auto;
	}
	.media-grid {
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
