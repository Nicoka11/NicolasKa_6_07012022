<script>
	export let name,
		value,
		label,
		type = 'text';
</script>

{#if type === 'text'}
	<label>
		<p id={`${name}-label`}>{label}</p>
		<input type="text" aria-labelledby={`${name}-label`} bind:value />
	</label>
{/if}
{#if type === 'email'}
	<label>
		<p id={`${name}-label`}>{label}</p>
		<input type="email" aria-labelledby={`${name}-label`} {name} bind:value />
	</label>
{/if}
{#if type === 'textarea'}
	<label>
		<p id={`${name}-label`}>{label}</p>
		<textarea {name} aria-labelledby={`${name}-label`} bind:value />
	</label>
{/if}

<style lang="scss">
	input {
		box-sizing: border-box;
		border-radius: 5px;
		border: none;
		padding: 0.8rem;
		width: 100%;
		margin-bottom: 1rem;
		outline: none;
		&:focus {
			outline: 2px solid var(--c-border);
		}
	}
	textarea {
		box-sizing: border-box;
		border-radius: 5px;
		border: none;
		padding: 0.8rem;
		width: 100%;
		min-height: 10.6rem;
		margin-bottom: 0.7rem;
		&:focus {
			outline: 2px solid var(--c-border);
		}
	}

	p {
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
	}
</style>
