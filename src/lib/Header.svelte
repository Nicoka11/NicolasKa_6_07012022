<script>
	import { page } from '$app/stores';
</script>

<header>
	<a href="/">
		<img src="/static/logo.png" alt="Fisheye Home page" />
	</a>
	{#if $page.url.pathname === '/'}
		<h1>Nos photographes</h1>
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		margin: 2rem 0;
		min-width: 75vw;
	}
	img {
		width: 12.5rem;
	}

	h1 {
		color: var(--c-main);
		font-weight: 400;
        font-size: 2.25rem;
	}
</style>
