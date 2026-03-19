<script>
    export let album
</script>

<a class='album' href="/photo/{album.link}">
    <div class='album__border'>
        <div class='album__preview'>
            <img class="album__preview-img" src="/img/{album.inner[0].preview ?? album.inner[0].sm}" alt='Альбом {album.name}'>
        </div>
    </div>
    <div class='album__bottom'>
        <p class='album__name'>{album.name}</p>
        <p class='album__length'>{album.inner.length} Фото</p>
    </div>
</a>

<style>
    .album {
        text-decoration: none;
    }
    .album__border {
        position: relative;
        z-index: 5;
    }
    .album__preview {
        position: relative;
        z-index: -1;
        height: 200px;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 10px;
        border: 1px solid #a9a9a9;
    }
    .album__preview-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 0.4s;
    }
    .album:hover .album__preview-img {
        transform: scale(1.1);
    }
    .album__bottom {
        display: flex;
        flex-direction: column;
    }
    .album__name {
        text-transform: capitalize;
        text-align: center;
        font-weight: 600;
        color: #000;
        margin-bottom: 3px;
    }
    .album__length {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: #6d6d6d;
    }
</style>
