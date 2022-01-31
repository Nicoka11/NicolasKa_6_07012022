<script>
	export let value = 'button', clickHandler, aria;
</script>

<button on:click={clickHandler} aria-label={aria}>{value}</button>

<style lang="scss">
	@import '../style/CtaButton.scss';
	button {
		@include CtaButton;
	}
</style>
