<script>
	import {fade} from 'svelte/transition'

	export let duration = 2000
	export let slides

	let currentSlide = 0

	const nextSlide = () => {
		currentSlide++
		if (currentSlide >= slides.length) {
			currentSlide = 0
		}
		timer()
	}
	const prevSlide = () => {
		currentSlide--
		if (currentSlide <= 0) {
			currentSlide = slides.length - 1
		}
		timer()
	}
	const goToSlide = (i) => {
		currentSlide = i
		timer()
	}
	let interval
	const timer = () => {
		clearInterval(interval)
		interval = setInterval(nextSlide, duration)
	}
	timer();
</script>

<div class="slider">
	{#each slides as slider, i}
		{#if currentSlide === i}
			<div class='slide' >
				<img class="slide-img" src={slider}  alt='action' transition:fade={{ duration: 400 }}>
			</div>
		{/if}
	{/each}
	<button class="next" on:click={nextSlide}></button>
	<button class="prev" on:click={prevSlide}></button>
	<div class="nav">
		{#each slides as slider, i}
			<button
				class="bubble"
				on:click={() => goToSlide(i)}
				class:current={i === currentSlide}
				class:onedown={i === currentSlide - 1}
				class:twodown={i === currentSlide - 2}
				class:oneup={i === currentSlide + 1}
				class:twoup={i === currentSlide + 2}
			/>
		{/each}
	</div>
</div>

<style>
	.slider {
		position: relative;
		width: 100%;
		height: clamp(400px, 40vw, 50vw);
		background-color: #222;
	}
	.slide {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.slide-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.next,
	.prev {
		position: absolute;
		display: block;
		z-index: 2;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		padding: 0;
		border: none;
		border-radius: 50%;
		font-size: 40px;
		cursor: pointer;
		background: rgba(128, 128, 128, 0.415);
		color: #fff;
	}
	.next {
		right: 20px;
		background-image: url(img/svg/caret-right-fill.svg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.prev {
		left: 20px;
		background-image: url(img/svg/caret-left-fill.svg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.nav {
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		height: 50px;
		z-index: 3;
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}
	.bubble {
		padding: 0;
		border: 0;
		height: 10px;
		width: 10px;
		border-radius: 100px;
		transition: all 0.4s ease-out;
		cursor: pointer;
	}
	.current {
		transform: scale(200%);
	}
	.onedown,
	.oneup {
		transform: scale(150%);
	}
	.twodown,
	.twoup {
		transform: scale(120%);
	}
</style>
