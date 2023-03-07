<script setup lang="ts">
import AdsProPaypalComponent from '../payments/AdsProPaypalComponent.vue';
</script>

<template>
    <q-page class="column neoteric text-white justify-evenly">
        <h3 class="q-pb-md q-my-none text-center">Próximas formaciones:</h3>
        <div class="row items-center justify-evenly web-container">
            <h5 class="q-pb-md q-mb-none">Marzo:</h5>
            <router-link to="ads-profesional">
                <img src="images/ads-portada.png" alt="course1" />
            </router-link>
            <div class="column">
                <AdsProPaypalComponent />
                <q-btn
                    label="Más Información"
                    to="ads-profesional"
                    class="bg-accent q-my-md"
                ></q-btn>
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
        margin-bottom: 40%;
        width: 110%;
    }
    to {
        margin-bottom: 0%;
        width: 100%;
    }
}
</style>
