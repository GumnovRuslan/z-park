<script>
    export let album
</script>

<a class='album' href="/photo/{album.link}">
    <div class='album__border'>
        <div class='album__preview-container'>
            <img class="album__preview" src={album.inner[0]} alt='photo1'>
        </div>
    </div>
    <div class='album__bottom'>
        <p class='album__name'>{album.name}</p>
        <p class='album__length'>{album.inner.length} фото</p>
    </div>
</a>

<style>
    .album {
        text-decoration: none;
    }
    .album__border {
        position: relative;
    }
    .album__border::before,
    .album__border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid #c6c6c6;
        border-radius: 5px;
        box-shadow: inset -2px -2px 5px 1px #ffffff;
    }
    .album__border::before {
        z-index: -2;
        top: 3px;
        left: 3px;
        background: #c1c1c1;
    }
    .album__border::after {
        z-index: -3;
        top: 7px;
        left: 7px;
        background: #b9b9b9;
    }
    .album__preview-container {
        position: relative;
        z-index: -1;
        height: 200px;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 10px;
        border: 1px solid #a9a9a9;
    }
    .album__preview {
        object-fit: cover;
        max-height: 200px;
        transition: all 0.5s;
    }
    .album:hover .album__preview {
        transform: scale(1.2);
    }
    .album__bottom {
        display: flex;
        flex-direction: column;
    }
    .album__name {
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        color: #000;
    }
    .album__length {
        text-transform: uppercase;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        color: #6d6d6d;
    }
</style>
