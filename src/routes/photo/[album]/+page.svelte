<script>
    import SectionTitle from '$lib/component/SectionTitle.svelte'
    import {fade} from 'svelte/transition'
    export let data


    let isGalleryOpen = false;
    let currentImage = 0;
    let images = data.inner

    const openGallery = i => {
        currentImage = i;
        isGalleryOpen = true;
    }

    const closeGallery = () => isGalleryOpen = false;
    const nextImage = () => currentImage = (currentImage + 1) % images.length;
    const prevImage = () => currentImage = (currentImage - 1 + images.length) % images.length;
</script>

<SectionTitle value={data.name}/>
<a href='/photo' class='back'>Вернуться в галерею</a>

{#if isGalleryOpen}
  <div class="gallery" on:click={closeGallery} transition:fade={{ duration: 200 }}>
    <div class="image-container" on:click={e => e.stopPropagation()}>
      <button class="close-button" on:click={closeGallery}>&times;</button>
      <img src={images[currentImage]} alt="Gallery" class="image"/>
        <button class="btn-controls btn-next" type="button" on:click={prevImage} disabled={currentImage === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
            </svg>
        </button>
        <button class="btn-controls btn-previous" type="button" on:click={nextImage} disabled={currentImage === images.length - 1}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
            </svg>
        </button>
    </div>
  </div>
{/if}


<div class='photos'>
    {#each images as image, i}
        <div class='photo__img-container'>
            <a  href='#' on:click={() => openGallery(i)}>
                <img src={image} alt='' class='photo__img' >
            </a>
        </div>
    {/each}
</div>

<style>
    .gallery {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 999;
    }

    .image-container {
        width: 70%;
    }

    .image {
        width: 100%;
        height: auto;
    }
    .btn-controls {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
        color: #fff;
        background: transparent;
        border: none;
        padding: 0;
    }
    .bi-caret-left, .bi-caret-right {
        width: 100%;
        transition: all 0.2s;
    }
    .bi-caret-left:hover, .bi-caret-right:hover {
        color: #b9bbff;
    }
    .btn-controls:disabled .bi-caret-left,
    .btn-controls:disabled .bi-caret-right {
        color: #505050;
    }
    .btn-previous {
        right: 40px;
    }
    .btn-next {
        left: 20px;
    }

    .close-button {
        position: absolute;
        right: 40px;
        top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 50px;
        color: #fff;
        background: transparent;
        border: none;
    }

     .back {
        padding: 5px 10px;
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        border-radius: 5px;
        color: #000;
        background: #aa86ff;
    }
    .photos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
        justify-content: center;
        padding: 20px 50px;
        gap: 50px;
    }
    .photo__img-container {
        width: 300px;
        height: 200px;
        overflow: hidden;
    }
    .photo__img-container:hover .photo__img {
        transform: scale(110%);
    }
    .photo__img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
    }
</style>
