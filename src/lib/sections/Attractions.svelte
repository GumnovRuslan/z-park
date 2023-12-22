<script>
    let arr = [
        'Поролоновая яма',
        'Батуты',
        'Зона для малышей',
        'Тарзанка', 'Лабиринт',
        'Песочница',
        'Бассейн с шариками',
        'Кульбитные подушки',
        'Ледяная горка',
        'Аэрохокей'
        ];
</script>

<div class="attractions">
    <div class='attractions__cards'>

        {#each arr as title }
            <div class='card'>
                <p class='card__title'>{title}</p>
                <div class='card__price'>от 130 BYN</div>
                <div class='card__img-container'>
                    <img src='/img/photo1.jpg' alt='' class='card__img'>
                </div>
            </div>
        {/each}

    </div>
</div>

<style>
    .attractions {
        padding: 0 20px;
    }
    .attractions__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 280px));
        justify-content: center;
        gap: 20px;
    }
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 200px;
        padding: 15px;
        border-radius: 20px;
        box-shadow: 2px 2px 5px grey;
        overflow: hidden;
    }
    .card:hover .card__img {
        transform: scale(110%);
    }
    .card__title {
        flex: auto;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.3;
    }
    .card__price {
        flex: auto;
        justify-self: center;
        font-weight: 700;
        font-size: 20px;
        color: orangered;
    }
    .card__img-container {
        position: absolute;
        z-index: -1;
        right: -15%;
        bottom: -25%;
        width: 200px;
        height: 200px;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 50%;
        background: grey;
        overflow: hidden;
    }
    .card__img {
        display: block;
        object-fit: cover;
        object-position: 70%;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
    }
</style>
