<script>
	import UserCard from '$lib/UserCard.svelte';
	import * as data from './../../static/photographers.json';
</script>

<main>
	<div class="user-grid">
		{#each data.photographers as user}
			<UserCard {user} />
		{/each}
	</div>
</main>

<style>
	.user-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
