<script>
	import { fly } from 'svelte/transition';
	export let mediaList, toggleLightBox, postId

	let index = mediaList.findIndex(media => media.id === postId);

	function changeIndex(direction) {
		if (direction === 'previous' && index > 0) {
			index -= 1;
		}
		if (direction === 'next' && index < mediaList.length - 1) {
			index += 1;
		}
	}
</script>

<div class="container" in:fly={{ opacity: 1, y: 0 }} out:fly={{ opacity: 0, y: -40 }}>
	<div class="lightbox">
		<button class="arrow-previous" on:click={() => changeIndex('previous')}>
			<i class="fas fa-chevron-left" />
		</button>
		<div class="viewport">
			{#each mediaList as media, i}
				<div class="content" style={`transform: translateX(${(i - index) * (800 + 10)}px)`}>
					<div class="img-container">
						<img src={`/content/${media.image}`} alt={media.title} />
					</div>
					<p class="img-title">{media.title}</p>
				</div>
			{/each}
		</div>
		<div class="right-control">
			<button class="exit-btn" on:click={toggleLightBox}>
				<i class="fas fa-times" />
			</button>
			<button class="arrow-next" on:click={() => changeIndex('next')}>
				<i class="fas fa-chevron-right" />
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: white;
		z-index: 100;
	}
	button {
		width: 5rem;
		height: 100%;
		border: none;
		background-color: rgb(219, 136, 118, 0);
		transition: all 0.3s ease;
		padding: 0;

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
		i {
			font-size: 2rem;
			color: var(--c-main);
		}
	}
	.right-control {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.exit-btn {
		height: 5rem;
	}


	.lightbox {
		display: flex;
		height: 80%;
		align-items: center;
	}

	.viewport {
		position: relative;
		display: flex;
		height: 100%;
		width: 800px;
		overflow: hidden;
	}

	.content {
		position: absolute;
		height: 100%;
		width: 100%;
		transition: all 0.6s cubic-bezier(0.16, 0.94, 0.57, 0.99);

		.img-container {
			height: 97%;
			width: fit-content;
			margin: 0 auto;
		}

		img {
			height: 100%;
			width: 100%;
			object-fit: contain;
			border-radius: 5px;
		}

		.img-title {
			color: var(--c-main);
		}
	}
</style>
