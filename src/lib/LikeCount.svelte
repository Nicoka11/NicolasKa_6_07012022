<script>
	export let count;
</script>

<div class="likes-count">
	<p>{count}</p>
	<span class="material-icons"> favorite </span>
</div>

<style lang="scss">
	.likes-count {
		display: flex;
		gap: 0.3rem;
		cursor: pointer;
		align-items: center;
	}
</style>
