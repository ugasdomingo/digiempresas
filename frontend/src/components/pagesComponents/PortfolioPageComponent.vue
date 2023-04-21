<script setup lang="ts"></script>

<template>
    <q-page class="column neoteric text-white justify-evenly">
        <img src="images/fondo-7.jpg" alt="Hero" class="hero-img-big" />
        <div class="row justify-evenly web-container">
            <h5>Últimas aplicaciones:</h5>
            <div class="row justify-evenly">
                <img
                    src="images/lucia-website.png"
                    class="cover-website"
                    alt="app1"
                />
                <img
                    src="images/mineteados-website.png"
                    class="cover-website"
                    alt="app2"
                />
                <img
                    src="images/theo-website.png"
                    class="cover-website"
                    alt="app3"
                />
            </div>
        </div>
        <div class="row items-center justify-evenly web-container">
            <h5>Últimos sitios web:</h5>
            <div class="row justify-evenly">
                <img
                    src="images/bdh-website.png"
                    alt="web1"
                    class="cover-website"
                />
                <img
                    src="images/silicit-webiste.png"
                    class="cover-website"
                    alt="web2"
                />
                <img
                    src="images/puravida-website.png"
                    class="cover-website"
                    alt="web3"
                />
                <img
                    src="images/estetic-website.png"
                    class="cover-website"
                    alt="web4"
                />
            </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.hero-img-big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
}
.cover-website {
    max-width: 240px;
    object-fit: cover;
    margin: 8px;
    animation-duration: 3s;
    animation-name: slidein;
}
.web-container {
    border: solid 1px white;
    padding: 4px 8px;
}

@keyframes slidein {
    from {
        margin-left: 100%;
        width: 100%;
    }
    to {
        margin-left: 0%;
        width: 100%;
    }
}
</style>
