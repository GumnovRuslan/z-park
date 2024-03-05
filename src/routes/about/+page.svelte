<script>
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import AboutInfo from "$lib/components/block/AboutInfo.svelte";
    import aboutInfo from '$lib/db/about.js'
</script>

<svelte:head>
    <meta name="description">
    <title>О нас</title>
</svelte:head>

<SectionTitle value='О парке'/>

<div class='about'>
    {#each aboutInfo as data, i}
        <div class='about__info-block'>
            <AboutInfo {...data} position={i % 2 ? 'right' : 'left'}/>
        </div>
    {/each}
</div>

<div class='review'>
    <h2 class='review__title'>
        <span class="review__title-text">Наш парк стал любимым местом для семейного отдыха!</span>
        <span class="review__title-text">Посмотрите, что говорят о нас наши гости</span>
    </h2>
    <div class='review__content'>
        <div class='review__content-image'>
            <img src='/img/review1.webp' alt='отзывы'>
        </div>
        <div class='review__content-image'>
            <img src='/img/review2.webp' alt='отзывы'>
            <img src='/img/review3.webp' alt='отзывы'>
        </div>
        <div class='review__content-image'>
            <img src='/img/review4.webp' alt='отзывы'>
        </div>
    </div>
</div>

<style>
    .review {
        padding: 0 20px;
    }
    .review__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }

    .review__title-text {
        text-align: center;
        max-width: 600px;
    }

    .review__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .review__content-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .about {
        padding: 0 10px;
        margin-bottom: 50px;
    }

    .about__info-block {
        position: relative;
        padding: 20px 0;
    }

    .about__info-block::after  {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        border-radius: 50%;
        background: #ffa600;
    }

    @media (max-width: 780px) {
        .review__content {
            flex-direction: column;
        }
        .review__content-image {
            display: flex;
            max-height: 300px;
        }
    }
</style>
