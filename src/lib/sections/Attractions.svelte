
<div class='container'>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Поролоновая яма</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Батуты</p>
            <p class='text'>Детские и взрослые батуты</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>День рождения</p>
            <p class='text'>Подарите своим детям незабываемые впечатления!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Зона для малышей</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Тарзанка</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Лабиринт</p>
            <p class='text'>Детские и взрослые батуты</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Песочница</p>
            <p class='text'>Подарите своим детям незабываемые впечатления!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Бассейн с шариками</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Кульбитные подушки</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Башня</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Ледяная горка</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
    <div class='card'>
        <img src='img/svg/clock.svg' alt='' class='img'>
        <div class='content'>
            <p class='title'>Аэрохокей</p>
            <p class='text'>Запрыгивай прямо со скалодрома или батута!</p>
        </div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 350px));
        grid-template-rows: repeat(4, 1fr);
        justify-items: center;
        justify-content: center;
        gap: 20px;
    }
    .card {
        /* flex: 40%; */
        display: flex;
        /* border: 1px solid #000; */
        gap: 20px;
        /* width: 400px; */
        /* min-height: 150px; */
        padding: 15px;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #a7a7a7;
        background: #e2e1ff;
    }
    .content {
        line-height: 1.3;
    }
    .img {
        width: 50px;
        height: 50px;
    }
    .title {
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
    }
    .text {
        font-size: 18px;
        font-weight: 500;
        color: rgb(101, 101, 101);
        transition: all 0.5s;
    }

    @media screen and (max-width: 980px) {
        .container {
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 250px));
            grid-template-rows: repeat(4, 1fr);
            justify-items: center;
            justify-content: center;
            gap: 10px;
        }
        .title {
            font-size: 16px;
        }
        .text {
            font-size: 14px;
        }
        .img {
            width: 30px;
            height: 30px;
        }
    }

    @media screen and (max-width: 650px) {
        .container {
            display: flex;
            flex-wrap: wrap;
        }
        .card {
            flex: auto;
        }
        .title {
            font-size: 16px;
        }
        .text {
            font-size: 14px;
        }
        .img {
            width: 30px;
            height: 30px;
        }
    }
</style>
