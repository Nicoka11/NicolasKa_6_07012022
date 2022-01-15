<script>
	import { userMedia } from '../store';
	import { fly } from 'svelte/transition';
	let sortOption = 'Popularité',
		options = ['Date', 'Titre'],
		dropdown = false;

	// Custom select logic
	function toggleDropdown() {
		dropdown = !dropdown;
	}

	function changeSelection(e) {
		options.push(sortOption);
		sortOption = e.target.innerHTML;
		options = options.filter((option) => option !== sortOption);
		toggleDropdown();
		setTimeout(() => sortMedia(sortOption), 400);
	}
	//Sorting
	const sortMedia = (option) => {
		switch (option) {
			case 'Popularité':
				userMedia.set($userMedia.sort((mediaA, mediaB) => mediaB.likes - mediaA.likes));
				break;
			case 'Date':
				userMedia.set(
					$userMedia.sort(
						(mediaA, mediaB) => new Date(mediaA.date).getTime() - new Date(mediaB.date).getTime()
					)
				);
				break;
			case 'Titre':
				userMedia.set(
					$userMedia.sort((mediaA, mediaB) => mediaA.title.localeCompare(mediaB.title))
				);
				break;
		}
	};
	sortMedia(sortOption);
</script>

<div class="dropdown-menu">
	<button class="select" on:click={toggleDropdown}>
		<p id="selected">
			{sortOption}
			<span class="material-icons" style={`transform: rotate(${dropdown ? -180 : 0}deg)`}>
				expand_more
			</span>
		</p>
	</button>
	{#if dropdown}
		<div class="options" in:fly={{ y: -30, x: 0 }} out:fly={{ y: -30, x: 0 }}>
			<ul class="list">
				{#each options as option}
					<div class="divider" />
					<li on:click={changeSelection}>{option}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown-menu {
		position: relative;
		color: white;
		font-size: 1rem;
		z-index: 2;
	}

	#selected {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;

		span {
			transition: transform 0.4s ease;
		}
	}
	.select {
		background-color: var(--c-main);
		padding: 0.6rem 0.9rem;
		border-radius: 6px;
		border: none;
		color: inherit;
		text-align: left;
		font-size: inherit;
		min-width: 8rem;
		cursor: pointer;
	}
	.options {
		position: absolute;
		top: 80%;
		background-color: var(--c-main);
		width: 100%;
		height: fit-content;
		padding-bottom: 0.7rem;
		border-radius: 0 0 6px 6px;
		z-index: -1;

		li {
			padding-left: 0.9rem;
			cursor: pointer;
		}
	}

	.divider {
		margin: 0.6rem auto;
		width: 85%;
		height: 1px;
		background-color: white;
	}
</style>
