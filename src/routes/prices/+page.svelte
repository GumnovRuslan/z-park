<svelte:head>
    <title>Стоимость посищения Z-park</title>
</svelte:head>


<h2  class="section__title">Стоимость посищения</h2>

<div class='content'>
    <div class='prices'>
        <h3 class='prices__title'>Посещение парка</h3>
        <div class='prices__cards'>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
        </div>
    </div>
    <div class='prices'>
        <h3 class='prices__title'>Посещение парка</h3>
        <div class='prices__cards'>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
        </div>
    </div>
    <div class='prices'>
        <h3 class='prices__title'>Посещение парка</h3>
        <div class='prices__cards'>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
            <div class='card'>
                <h4 class="card__title">ПН-ЧТ</h4>
                <p class='card__text'>1 час: <span class="card__price">11</span> byn</p>
                <p class='card__text'>весь день: <span class="card__price">16</span> byn</p>
            </div>
        </div>
    </div>
</div>
<style>
    :global(.section__title) {
        text-transform: uppercase;
        background: #d8ff4b;
        margin: 0;
        text-align: center;
        text-shadow: 1px 1px 2px #000;
        color: #f5f5f5;
    }
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 50px 0;
        /* height: 100vh; */
        /* background-image: url(/photo/bg.jpg); */
    }
    .prices {
    }
    .prices__title {
        margin: 0 0 10px 0;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        background: rgb(255, 85, 85);
    }
    .prices__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-around;
        padding: 0 10px;
    }
    .card {
        width: 250px;
        padding: 15px;
        border: 3px solid #000;
        border-radius: 10px;

    }
    .card__title {
        font-size: 20px;
        text-align: center;
        margin: 0;
    }
    .card__text {
        text-transform: uppercase;
        font-size: 18px;
        margin: 0;
    }
    .card__price {
        text-transform: uppercase;
        font-weight: 700;
    }

    @media screen and (min-width: 460px) {
        :global(.section__title) {
            font-size: 35px;
        }
    }
    @media screen and (max-width: 460px) {
        :global(.section__title) {
            font-size: 25px;
        }
    }
</style>
