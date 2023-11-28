<script>
    export let text = 'text'
</script>

<div class='footer__network'>
    <span class='footer__subtitle'>{text}</span>
    <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='youtube'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png' alt='vk'>
    <img src="https://w7.pngwing.com/pngs/398/444/png-transparent-instagram-thumbnail.png" alt="instagram">
</div>


<style>
    .footer__network {
        display: flex;
        align-items: center;
        gap: 10px;
    }
     img {
        width: 30px;
        height: 30px;
    }
</style>
