<script>

</script>

<div class='subscribe'>
    <div class='subscribe__img'>
        <img src='/img/spider-man.png' class="subscribe__img-inner" alt=''>
    </div>
    <div class='subscribe__inner'>
        <div class='subscribe__content'>
            <div class='subscribe__action'>
                <h4 class='subscribe__action-title'>Подпишитесь на новости</h4>
                <p class='subscribe__action-text'>Акции, бонусы, сюрпризы</p>
            </div>
            <form class='subscribe__form'>
                <input class="subscribe__form-email" type='email' placeholder="Введите ваш E-mail адрес">
                <button class='subscribe__form-send' type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f5f5f5" class="btn-send__img" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>
                </button>
            </form>
        </div>
        <label class='subscribe__agreement'>
            <input class="subscribe__agreement-checkbox" type='checkbox' name='' id=''>
            Выражаю свое согласие на обработку моих персональных данных
        </label>
    </div>

</div>

<style>
    .subscribe {
        display: flex;
        justify-content: center;
        padding: 10px clamp(10px, 3vw, 50px);
        box-shadow: 0 0 5px #6f6f6f;
        background: #fff700;
    }
    .subscribe__img {
        height: 150px;
    }
    .subscribe__img-inner {
        object-fit: cover;
        width: 150px;
        height: 100%;
    }
    .subscribe__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    .subscribe__content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(10px, 2vw, 40px);
    }
    .subscribe__action {
        text-align: right;
    }
    .subscribe__action-title {
        margin: 0;
        text-shadow: 0 0 2px #5e3ed0;
        font-size: clamp(22px, 5vw, 30px);
        font-weight: 500;
        line-height: 1.3;
        color: #2487ff;
    }
    .subscribe__action-text {
        color: #5e3ed0;
        font-weight: 500;
        font-size: clamp(18px, 4vw, 22px);
        line-height: 1.3;
    }
    .subscribe__form {
        position: relative;
    }
    .subscribe__form-email {
        width: 100%;
        padding: 15px 60px 15px 20px;
        font-size: clamp(16px, 2vw, 20px);
        border: none;
        border-radius: 50px;
    }
    .subscribe__form-send {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: #24b3ff;
    }
    .btn-send__img {
        width: 50%;
        height: 50%;
    }
    .subscribe__agreement {
        display: flex;
        align-items: center;
        gap: 5px;
        line-height: 1.2;
        font-size: clamp(12px, 2vw, 16px);
    }

    .subscribe__form-email:hover,
    .subscribe__form-email:focus,
    .subscribe__form-send:hover,
    .subscribe__form-send:focus,
    .subscribe__agreement-checkbox:hover,
    .subscribe__agreement-checkbox:focus {
        outline: 2px solid blue;
    }

    .subscribe__form-email:focus,
    .subscribe__form-send:focus,
    .subscribe__agreement-checkbox:focus {
        box-shadow: 0 0 8px blue;
    }
    @media screen and (max-width: 500px) {
        .subscribe__img {
            display: none;
        }
        .subscribe__inner {
            align-items: center;
        }
    }
</style>
