<script>
	import '../style/reset.css';
	import '../style/app.scss';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>Fisheye</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Material+Icons&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="app-container">
	<Header />
	<slot />
</div>

<style>
	.app-container {
		width: max-content;
		margin: 0 auto;
	}
</style>