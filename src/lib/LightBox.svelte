<script>
	import { onMount } from 'svelte';
	import { userMedia } from '../store';
	import { fly } from 'svelte/transition';
	export let toggleLightBox, postId;
	export let index = $userMedia.findIndex((media) => media.id === postId);
	let leftBtn;

	function keyEvent(e) {
		switch (e.key) {
			case 'ArrowRight':
				changeIndex('next');
				break;
			case 'ArrowLeft':
				changeIndex('previous');
				break;
			case 'Escape':
				toggleLightBox();
				break;
		}
	}

	function changeIndex(direction) {
		if (direction === 'previous' && index > 0) {
			index -= 1;
		}
		if (direction === 'next' && index < $userMedia.length - 1) {
			index += 1;
		}
	}

	onMount(() => {
		leftBtn.focus();
	});
</script>

<svelte:window on:keydown={(e) => keyEvent(e)} />

<section
	class="container"
	in:fly={{ opacity: 1, y: 0 }}
	out:fly={{ opacity: 0, y: -40 }}
	aria-label="image closeup view"
>
	<div class="lightbox">
		<button
			class="arrow-previous"
			on:click={() => changeIndex('previous')}
			aria-label="Previous image"
			bind:this={leftBtn}
		>
			<span class="material-icons" aria-hidden="true"> chevron_left </span>
		</button>
		<div class="viewport" aria-roledescription="carousel">
			{#each $userMedia as media, i}
				<div class="content" style={`transform: translateX(${(i - index) * (800 + 10)}px)`}>
					<div class="img-container">
						{#if media.image}
							<img
								src={`/compact/${media.image}`}
								alt={media.title}
								loading="lazy"
								id={media.id}
								aria-roledescription="slide"
							/>
						{:else}
							<!-- svelte-ignore a11y-media-has-caption -->
							<video
								src={`/content/${media.video}`}
								alt={media.title}
								controls
								autoplay
								aria-roledescription="slide"
							/>
						{/if}
					</div>
					<p class="img-title">{media.title}</p>
				</div>
			{/each}
		</div>
		<div class="right-control">
			<button class="exit-btn" on:click={toggleLightBox} aria-label="Close dialog">
				<span class="material-icons" aria-hidden="true"> close </span>
			</button>
			<button class="arrow-next" on:click={() => changeIndex('next')} aria-label="Next image">
				<span class="material-icons" aria-hidden="true"> chevron_right </span>
			</button>
		</div>
	</div>
</section>

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
		overflow: hidden;
	}
	button {
		width: 5rem;
		height: 100%;
		border: none;
		background-color: rgb(219, 136, 118, 0);
		transition: all 0.3s ease;
		padding: 0;

		&:hover {
			background-color: rgba(75, 5, 5, 0.03);
		}
		span {
			font-size: 3rem;
			color: var(--c-main);
		}
	}

	.arrow-previous,
	.arrow-next {
		span {
			font-size: 4rem;
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
			display: flex;
			align-items: center;
			height: 97%;
			width: 100%;
			margin: 0 auto;
		}

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: 5px;
		}
		video {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: 5px;
		}

		.img-title {
			color: var(--c-main);
			margin-top: 0.4rem;
		}
	}
</style>
