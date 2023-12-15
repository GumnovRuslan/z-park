<script>
 export let title = 'Title';
 export let menu = '';
 export let id = '';
</script>

<div class='menu' {id}>
    <h3 class='menu__title'>{title}</h3>
    <div class='menu__cards'>
        {#each menu as card }
            <div class='card'>
                <div class='card__img'>
                    {#if card[3]}
                        <img class='card-picture' src={card[3]} alt="img"/>
                    {:else}
                        <div class='card__img-inner'></div>
                    {/if}

                </div>
                <div class='card__inner'>
                    <p class='card__name'>{card[0]}</p>
                    <div class='card__info'>
                        <span class='card__price'>{card[1]}</span>
                        <span class='card__grams'>{card[2]}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .menu {
    }
    .menu__title {
        text-transform: uppercase;
        font-size: 30px;
        line-height: 1.3;
        margin: 0;
        padding: 20px 0;
    }

    .menu__cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
        grid-template-rows: auto;
        justify-items: center;
        justify-content: center;
        row-gap: 30px;
        column-gap: 20px;
    }

    .card {
        display: inline-block;
        max-width: 350px;
        width: 100%;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #ababab;
        background: #fff;
    }
    .card__img {
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
        background: #747474;
        overflow: hidden;
    }
    .card__img:hover .card-picture{
        transform: scale(110%);
    }
    .card-picture {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }
    .card__inner {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .card__name {
        font-size: 20px;
        line-height: 1.3;
    }
    .card__info {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        font-size: 24px;
    }
    .card__price {

    }
    .card__grams {
    }

    @media screen and (max-width: 1000px) {

    }
</style>
