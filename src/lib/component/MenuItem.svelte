<script>
    export let title = 'menu title';
    export let id = '';
    export let menu = [{name: 'name', price: 'price', grams: 'grams', img: '', description: ''}];

    let open = false;

    function f() {
        open = !open
    }
</script>

<div class='menu' id={id ?? ''}>
    <h3 class='menu__title'>{title}</h3>
    <div class='menu__cards'>
        {#each menu as dish,  key}
            <div class='card' on:click={f} key={key}>
                {#if dish.description}
                    <div class='card__description' class:card__description-open={open}>{dish.description}</div>
                {/if}
                <div class='card__img'>
                    <img class={dish.img ? 'card-picture' : ''} src={dish.img ?? 'img/favicon.png'} alt={dish.name}>
                </div>
                <div class='card__inner'>
                    <p class='card__name'>{dish.name ?? 'name'}
                        {#if dish.description}
                            <span class="card__description-sign">?</span>
                        {/if}
                        </p>
                    <div class='card__info'>
                        <span class='card__price'>{dish.price ?? 'prise'}</span>
                        <span class='card__grams'>{dish.grams ?? 'grams'}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .menu__title {
        text-transform: uppercase;
        font-size: clamp(24px, 3.5vw, 30px);
        line-height: 1.3;
        margin: 0;
        margin-bottom: clamp(10px, 3vw, 20px);
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
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: clamp(15px, 3vw, 20px);
        border-radius: 5px;
        box-shadow: 1px 1px 5px #ababab;
        background: #fff;
    }
    .card__description {
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        padding-left: inherit;
        padding-right: inherit;
        border-radius: inherit;
        line-height: 1.3;
        transition: all .3s;
        overflow: hidden;
        background: #e4e6a466;
    }
    .card__description-open {
        visibility: visible;
        height: inherit;
        width: inherit;
        padding-top: inherit;
        padding-bottom: inherit;
    }
    .card__img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
        overflow: hidden;
        background: #fff;
    }
    .card__img:hover .card-picture {
        transform: scale(110%);
    }
    .card-picture {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }
    .card__inner {
        flex: auto;
        display: flex;
        flex-direction: column;
        gap: clamp(10px, 3vw, 20px);
    }
    .card__name {
        flex: auto;
        font-size: clamp(16px, 5vw, 18px);
        line-height: 1.3;
    }
    .card__description-sign {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: #d5d5d5;
    }
    .card__info {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        font-size: clamp(18px, 5vw, 22px);
        line-height: 1.3;
    }
</style>
