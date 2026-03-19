<script>
    export let value = 'Заголовок секции';
</script>

<h1 class='title'>{value}</h1>

<style>
    .title {
        font-weight: 600;
        padding: 10px;
        margin: 0;
        font-size: clamp(20px,4.5vw, 28px);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.1;
        word-spacing: 5px;
        color: #f5f5f5;
        background: #ffa600;
    }
</style>
