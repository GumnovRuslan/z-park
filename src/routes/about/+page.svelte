<script>
    import SectionTitle from "$lib/component/SectionTitle.svelte";
</script>

<SectionTitle value='О парке'/>

<div class='content'>
    <div class='description'>
        <div class='img-container'>
            <div class='img'></div>
        </div>
        <div class='info'>
            <p class='text'>Z-PARK - это огромное пространство, на котором дети отправляются в активное путешествие, прыгают до звезд на батутах, пробираются сквозь джунгли в лабиринтах и еще многое, что позволяет ребенку выплеснуть свою энергию, а родителям с удовольствием разделить радость ребят.</p>
            <p class='text'>Наша команда - это семья, которая понимает, что дети меняют нашу жизнь навсегда. Для нас очень важна среда, в которую погружаются юные мечтатели, - дух приключений и неограниченной свободы развлечений наполняют наш парк.</p>
            <p class='text'>Создание именно такой среды и соответствующей атмосферы является для нас ключевой задачей.</p>
        </div>

    </div>
</div>


<style>
    .content {
        padding: 20px;
    }
    .description {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
    .img-container {
    }
    .img {
        width: 350px;
        height: 250px;
        background: grey;
    }
    .info {
        width: 50vw;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .text {
        line-height: 1.5;
    }

    @media screen and (max-width: 800px) {
        .description {
            flex-direction: column;
        }
        .img {
            width: calc(100vw - 40px);
        }
        .info {
            width: auto;
        }
    }
</style>
