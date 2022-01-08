<script>
	export let value = 'button';
	export let clickHandler;
</script>

<button on:click={clickHandler}>{value}</button>

<style lang="scss">
	@import '../style/CtaButton.scss';
	button {
		@include CtaButton;
	}
</style>
