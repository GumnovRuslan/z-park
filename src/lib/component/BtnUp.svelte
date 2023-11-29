<script>
  import { onMount } from 'svelte';

  let btnUp;

  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 100
    ? btnUp.classList.remove('btn-up__hide')
    : btnUp.classList.add('btn-up__hide');
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

   onMount(() => {
    btnUp = document.querySelector('.btn-up');
    window.addEventListener('scroll', handleScroll);
    });

</script>

<button class="btn-up btn-up__hide" on:click={scrollToTop}>
	<div class="btn-up__inner">
		<svg
			class="btn-up__img"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="#bbbbbb"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
			/>
		</svg>
	</div>
</button>

<style>
    .btn-up {
        position: fixed;
        z-index: 4;
        bottom: 10%;
        right: 20px;
        background: #3b255993;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 0;
        transition: opacity 0.4s, visibility 0.4s, background 0.2s, fill 0.2s;
    }
    .btn-up__inner {
        padding: 5px;
    }
    .btn-up__img {
        display: block;
        width: 35px;
        height: 35px;
    }
    .btn-up:hover {
        background: #3b2559;
    }
    .btn-up:hover .btn-up__img {
        fill: #f5f5f5;
    }
    .btn-up__hide {
        visibility: hidden;
        opacity: 0;
    }
</style>
