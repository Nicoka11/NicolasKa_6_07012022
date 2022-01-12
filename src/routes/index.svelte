<script>
	import UserCard from '$lib/UserCard.svelte';
	import {data} from '../store'
</script>

<main>
	<div class="user-grid">
		{#each $data.photographers as user}
			<UserCard {user} />
		{/each}
	</div>
</main>

<style>
	.user-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
	}
</style>
