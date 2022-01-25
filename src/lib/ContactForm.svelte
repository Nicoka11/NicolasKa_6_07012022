<script>
	import { onMount } from 'svelte';
	import InputText from './InputText.svelte';
	export let user, toggleContactForm;
	let formEl;

	const formSubmit = () => {
		console.log(formData);
	};

	const formData = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	};

	function keyEvent(e) {
		switch (e.key) {
			case 'Escape':
				toggleContactForm();
				break;
		}
	}

	onMount(() => {
		formEl.firstChild.focus();
	});
</script>

<svelte:window on:keyup={(e) => keyEvent(e)} />

<div class="form" on:click|stopPropagation={() => {}}>
	<div class="container-top" tabindex="0">
		<h1>Contactez-moi<br />{user.name}</h1>
		<button class="btn-close" on:click={toggleContactForm} aria-label="Close Contact form">
			<span class="material-icons" aria-hidden="true"> close </span>
		</button>
	</div>
	<form on:submit|preventDefault={formSubmit} bind:this={formEl}>
		<InputText label="Prénom" name="firstName" bind:value={formData.firstName} />
		<InputText label="Nom" name="lastName" bind:value={formData.lastName} />
		<InputText type="email" label="Email" name="email" bind:value={formData.email} />
		<InputText type="textarea" label="Votre message" name="message" bind:value={formData.message} />
		<input type="submit" value="Envoyer" aria-label="Send" />
	</form>
</div>

<style lang="scss">
	@import '../style/CtaButton.scss';

	h1 {
		font-size: 2.2rem;
		line-height: 2.5rem;
		margin-bottom: 1.5rem;
	}

	.form {
		border-radius: 5px;
		background-color: var(--c-main-light);
		padding: 1.5rem;
		width: 30rem;
		box-shadow: -5px 10px 30px rgba(0, 0, 0, 0.25);
		z-index: 20;
	}

	input[type='submit'] {
		@include CtaButton;
		padding: 1rem 2.2rem;

		&:hover {
			background-color: var(--c-main-hover);
		}
	}

	.btn-close {
		background-color: transparent;
		border: none;
		height: fit-content;

		span {
			font-size: 2.5rem;
			color: white;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				color: var(--c-main);
			}
		}
	}

	.container-top {
		display: flex;
		justify-content: space-between;
	}
</style>
