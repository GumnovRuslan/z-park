<script>
    export let image = {};
    export let alt = '';
    export let text = 'text';
    export let position = 'left';
</script>

<div class='about-info'>
    {#if position == 'left'}
        {#if image}
        <div class='about-info__img'>
            <picture>
                {#if image.big}
                    <source srcset="/img/{image.big}.webp" media="(min-width: 1440px)"/>
                {/if}
                {#if image.md}
                    <source srcset="/img/{image.md}.webp" media="(min-width: 425px) and (max-width: 1440px"/>
                {/if}
                {#if image.sm}
                    <source srcset="/img/{image.sm}.webp" media="(max-width: 425px)"/>
                {/if}
                <img src='/img/{image.def}.webp' alt='{alt}' loading="lazy">
            </picture>
        </div>

        {/if}
        <p class='about-info__text'>{text}</p>
    {:else if position == 'right'}
        <p class='about-info__text'>{text}</p>
        {#if image}
            <div class='about-info__img'>
            <picture>
                {#if image.big}
                    <source srcset="/img/{image.big}.webp" media="(min-width: 1440px)"/>
                {/if}
                {#if image.md}
                    <source srcset="/img/{image.md}.webp" media="(min-width: 425px) and (max-width: 1440px"/>
                {/if}
                {#if image.sm}
                    <source srcset="/img/{image.sm}.webp" media="(max-width: 425px)"/>
                {/if}
                <img src='/img/{image.def}.webp' alt='{alt}' loading="lazy">
            </picture>
        </div>
        {/if}
    {/if}

</div>


<style lang="scss">
    .about-info {
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px 0;

        &::after  {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            border-radius: 50px;
            background: #F5F5F5;
        }
    }
    .about-info__text {
        font-size: clamp(16px, 4vw, 20px);
        text-align: center;
        line-height: 1.3;
    }
    .about-info__img {
        flex: 1 0 auto;
        display: flex;
        max-width: 30%;
        height: 100%;
        min-height: 250px;
        border-radius: 10px;
        overflow: hidden;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        .about-info__img {
            display: none;
        }
    }
</style>
