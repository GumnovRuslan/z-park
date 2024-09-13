<script>
</script>

<div class='footer__container'>
    <div class='footer-top'>
            <div class='footer-top__logo'>
                <a href='/' class='footer-top__logo-link'>
                    <img src='/img/logo-removebg-cut.webp' class='footer-top__logo-img' alt='logo'>
                </a>
            </div>
            <div class='footer-top__content'>
                <a href='/rules' class='footer-top__link'>Правила посещения</a>
                <a href='/privacy-policy' class='footer-top__link'>Политика конфиденциальности</a>
            </div>
            <div class='footer-top__content'>
                <a href='/contacts' class='footer-top__link'>Контакты</a>
                <a href='/holidays' class='footer-top__link'>Праздники</a>
                <a href='/prices' class='footer-top__link'>Цены</a>
            </div>
            <div class='footer-top__content'>
                <a href='/about' class='footer-top__link'>О нас</a>
                <a href='/photo' class='footer-top__link'>Фото</a>
                <a href='/cafe' class='footer-top__link'>Кафе</a>
            </div>
        </div>
        <div class='footer-bottom'>
            <p class='footer-bottom__copy'>Все права защищены © 2018-2024 ООО "Парки развлечений"</p>
        </div>
</div>


<style lang="scss">
  .footer {
    &__container {
      padding: 30px clamp(10px, 4vw, 100px);
      background: #24b3ff;
    }
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    max-width: 85%;
    margin: 0 auto 50px auto;

    &__logo {
      flex: 100%;
    }

    &__logo-link {
      display: block;
      width: 140px;
      padding: 0 10px;
    }

    &__logo-img {
      width: 100%;
      height: 100%;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }

    &__link {
        min-width: 150px;
        padding: 5px 10px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.3;
        color: #000;
        transition: all 0.2s;
    }
  }
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
      border-top: 1px solid #f5f5f5;

      &__copy {
        text-align: center;
        font-size: 14px;
        color: #1F1F1F
      }
    }
</style>
