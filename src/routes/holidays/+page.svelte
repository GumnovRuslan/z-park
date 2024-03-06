<script>
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import CustomBtn from "$lib/components/CustomBtn.svelte";
</script>

<svelte:head>
    <title>
        Праздинки в Z-park
    </title>
</svelte:head>

<SectionTitle value='Праздники в Z-park'/>
<div class='content'>
    <div class='left'>
        <p class='title'>Немного информации</p>
        <div class='cards'>
            <div class='card'>
                <p class='card__title'>Развлечения</p>
                <p class='card__text'>
                    <span>Уже 5 лет мы создаем яркие и незабываемые праздники для детей всех возрастов! Наш детский парк развлечений предлагает разнообразные тематические вечеринки и мероприятия, начиная от дней рождений и заканчивая выпускными.</span>
                    <span>Вы можете быть уверены, что ваше мероприятие будет организовано на высшем уровне, чтобы каждый гость испытал максимум радости и удовольствия, ведь мы в этом настоящие профессионалы!</span>
                </p>
            </div>
            <div class='card'>
                <p class='card__title'>Никакой арендной платы!</p>
                <p class='card__text'>
                    <span>Для вашего праздника мы предлагаем особенные условия! Мы забронируем для вас одну из наших уютных комнат или столик, чтобы вы могли отметить важное событие в прекрасной обстановке.</span>
                    <span>И самое потрясающее - у нас нет арендной платы за помещение! Вам нужно будет только оплатить входные билеты для маленьких гостей торжества и внести минимальный депозит. </span>
                    <span>А гости старше 18 лет проходят в парк бесплатно! Билеты на мероприятие действуют в течение всего дня, так что каждый сможет наиграться вдоволь и получить максимум удовольствия от праздника!</span>
                </p>
            </div>
            <div class='card'>
                <p class='card__title'>Угощения</p>
                <p class='card__text'>
                    <span>Наш бренд-шеф разработал уникальное меню, где каждый сможет найти для себя что-то вкусное. У нас большое разнообразие блюд, которые можно заказать заранее к определенному времени или на месте.</span>
                    <span>У нас есть все, чтобы ваш праздник был вкусным и незабываемым! Попробуйте и убедитесь сами!</span>
                </p>
            </div>
        </div>
    </div>
    <div class='right'>
        <p class='title'>Можно заказать прямо сейчас!</p>
        <div class='list'>
            <ol class='info'>
                <li class='info__item'>
                    <p class='info__title'>Кто и когда</p>
                    <p class='info__text'>Выберите дату и уточните число гостей</p>
                </li>
                <li class='info__item'>
                    <p class='info__title'>Развлечения и услуги</p>
                    <p class='info__text'>Мы подобрали лучших фотографов, аквогримеров и аниматоров, чтобы сделать ваше торжество незабываемым!</p>
                </li>
                <li class='info__item'>
                    <p class='info__title'>Угощения</p>
                    <p class='info__text'>В нашем кафе самое необычное детское меню</p>
                </li>
            </ol>
            <CustomBtn text='Заказать'/>
        </div>
    </div>
</div>

<style>

    .content {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        padding: 20px;
    }
    .left {
        flex: 55%;
        width: 40vw;
    }
    .right {
        flex: 40%;
    }
    .title {
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 15px;
        line-height: 1.2;
    }
    .cards {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .card {
        padding: 20px;
        border: 2px solid #bebebe;
        border-radius: 10px;
        box-shadow: 2px 2px 5px #bebebe;
        background: #f5f5f5;
    }
    .card__title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .card__text {
        font-size: 18px;
        line-height: 1.5;
    }
    .list {
        padding: 20px;
        outline: 4px dashed #d3d3d3;
        border-radius: 10px;
        background: #d3d3d3;
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 0 20px 0;
    }
    .info__title {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 22px;
        line-height: 1.3;
    }
    .info__text {
        font-size: 18px;
    }

    @media screen and (max-width: 750px) {
        .left {
            min-width: 280px;
        }
        .right {
            min-width: 270px;
        }
        .title {
            font-size: 20px;
        }
        .card__title {
            font-size: 18px;
        }
        .card__text {
            font-size: 16px;
        }
        .info__item {
            font-size: 16px;
        }
        .info__text {
            font-size: 16px;
        }
    }
</style>
