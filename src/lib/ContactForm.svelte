<script>
	import InputText from './InputText.svelte';
	export let user, toggleContactForm;

	const formSubmit = () => {
		console.log(formData);
	};

	const formData = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	};
</script>

<div class="form" on:click|stopPropagation={() => {}}>
    <div class="container-top">
        <h1>Contactez-moi<br />{user.name}</h1>
        <button class="btn-close" on:click={toggleContactForm}>
            <span class="material-icons">
				close
				</span>
        </button>
    </div>
	<form on:submit|preventDefault={formSubmit}>
		<InputText label="Prénom" name="firstName" bind:value={formData.firstName} />
		<InputText label="Nom" name="lastName" bind:value={formData.lastName} />
		<InputText type="email" label="Email" name="email" bind:value={formData.email} />
		<InputText type="textarea" label="Votre message" name="message" bind:value={formData.message} />
		<input type="submit" />
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
		box-shadow: 0px 0.7px 6.3px rgba(0, 0, 0, 0.024), 0px 1.4px 12.9px rgba(0, 0, 0, 0.046),
			0px 2.2px 21.7px rgba(0, 0, 0, 0.064), 0px 3.3px 36.4px rgba(0, 0, 0, 0.075),
			0px 7px 80px rgba(0, 0, 0, 0.08);
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
            transition: all .3s ease;

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
