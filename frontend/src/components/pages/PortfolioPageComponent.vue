<script setup lang="ts"></script>

<template>
    <q-page class="column neoteric text-white justify-evenly gradiant">
        <div class="row justify-evenly web-container">
            <h5>Últimas aplicaciones:</h5>
            <div class="row justify-evenly">
                <img src="images/lucia-website.png" alt="app1" />
                <img src="images/mineteados-website.png" alt="app2" />
            </div>
        </div>
        <div class="row items-center justify-evenly web-container">
            <h5>Últimos sitios web:</h5>
            <div class="row justify-evenly">
                <img src="images/bdh-website.png" alt="web1" />
                <img src="images/silicit-webiste.png" alt="web2" />
                <img src="images/puravida-website.png" alt="web3" />
                <img src="images/estetic-website.png" alt="web4" />
            </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
img {
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
        width: 300%;
    }
    to {
        margin-left: 0%;
        width: 100%;
    }
}
</style>
