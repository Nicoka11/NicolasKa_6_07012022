<script>
	export let name,
		value,
		label,
		type = 'text';
</script>

{#if type === 'text'}
	<label>
		<p>{label}</p>
		<input type="text" {name} bind:value />
	</label>
{/if}
{#if type === 'email'}
	<label>
		<p>{label}</p>
		<input type="email" {name} bind:value />
	</label>
{/if}
{#if type === 'textarea'}
	<label>
		<p>{label}</p>
		<textarea {name} bind:value />
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
		&:hover {
			outline: 1px solid var(--c-border);
		}
	}

	p {
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
	}
</style>
