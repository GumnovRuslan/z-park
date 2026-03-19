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
        <AboutInfo {...data} position={i % 2 ? 'right' : 'left'}/>
    {/each}
</div>

<div class='review'>
    <h2 class='review__header'>
        <span class="review__title-title">Посмотрите, что говорят о нас наши гости</span>
        <span class="review__title-text">Наш парк стал любимым местом для семейного отдыха!</span>
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

<style lang="scss">
    .review {
        padding: 0 10px;

        &__header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            font-weight: 600;
            font-size: 36px;
            line-height: 46.8px;
        }

        &__title-title {
            text-align: center;
            text-transform: uppercase;
            font-size: clamp(20px, 5vw, 36px);
            line-height: 1.3;
        }

        &__title-text {
            text-align: center;
            font-weight: 400;
            font-size: clamp(16px, 4vw, 18px);
            line-height: 1;
            color: #606060;
        }

        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        &__content-image  {
            display: flex;
            flex-direction: column;
        }

        &__content-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    .about {
        padding: 0 10px;
        margin-bottom: 50px;
    }

    @media (max-width: 780px) {
        .review__content {
            flex-direction: column;
        }
        .review__content-image {
            display: flex;
        }
    }
</style>
