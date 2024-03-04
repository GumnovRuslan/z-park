<script>
    export let image = '';
    export let alt = '';
    export let text = 'text';
    export let position = 'left';
</script>

<div class='about-info'>
    {#if position == 'left'}
        {#if image}
            <img src='/img/{image}' alt='{alt}' class='about-info__img'>
        {/if}
        <p class='about-info__text'>{text}</p>
    {:else if position == 'right'}
        <p class='about-info__text'>{text}</p>
        {#if image}
            <img src='/img/{image}' alt='{alt}' class='about-info__img'>
        {/if}
    {/if}

</div>


<style>
    .about-info {
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        max-width: 1000px;
        margin: 0 auto;
    }
    .about-info__text {
        font-size: clamp(16px, 4vw, 20px);
        font-weight: 500;
        text-align: center;
        line-height: 1.3;
    }
    .about-info__img {
        width: 30%;
        min-height: 250px;
        object-fit: cover;
        border-radius: 10px;
    }

    @media screen and (max-width: 600px) {
        .about-info__img {
            display: none;
        }
    }
</style>
