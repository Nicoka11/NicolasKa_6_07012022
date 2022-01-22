<script>
	import { page } from '$app/stores';
	import { data, userMedia } from '../../store';
	import { fade, fly } from 'svelte/transition';
	import Sorting from '$lib/Sorting.svelte';
	import UserDetails from '$lib/UserDetails.svelte';
	import UserInfo from '$lib/UserInfo.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import LightBox from '$lib/LightBox.svelte';
	import UserPostGrid from '$lib/UserPostGrid.svelte';

	userMedia.set(
		$data.media
			.filter((media) => media.photographerId == $page.params.slug)
			.map((media) => {
				return { ...media, liked: false };
			})
	);
	let user = $data.photographers.filter((user) => user.id == $page.params.slug)[0];

	let isContactFormOpen = false,
		isLightBoxOpen = false,
		postId;

	const toggleContactForm = () => {
		isContactFormOpen = !isContactFormOpen;
	};

	const toggleLightBox = () => {
		isLightBoxOpen = !isLightBoxOpen;
	};

	const setPostId = (media) => {
		postId = media.id;
	};
</script>

<main>
	{#if isLightBoxOpen}
		<LightBox {toggleLightBox} {postId} />
	{/if}
	{#if isContactFormOpen}
		<div class="form-container" on:click={toggleContactForm} in:fade out:fade>
			<div in:fade out:fly={{ y: -40 }} role="dialog">
				<ContactForm {user} {toggleContactForm} />
			</div>
		</div>
	{/if}
	<UserDetails {user} ctaClickHandler={toggleContactForm} />
	<div class="sorting">
		<p>Trier par</p>
		<Sorting />
	</div>
	<UserPostGrid {toggleLightBox} {setPostId} />
	<UserInfo price={user.price} />
</main>

<style lang="scss">
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

	.sorting {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 3rem;
		p {
			font-weight: 700;
		}
	}
</style>
