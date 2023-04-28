<script setup lang="ts">
import AdsProPaypalComponent from 'components/paymentsComponents/AdsProPaypalComponent.vue';
</script>

<template>
    <q-page class="column neoteric text-white flex-center">
        <img src="images/fondo-7.jpg" alt="Hero" class="hero-img-big" />
        <h3 class="q-pb-md q-my-none text-center">Próximas formaciones:</h3>
        <div class="courses-container">
            <div class="column items-center justify-evenly web-container">
                <router-link to="ads-for-business">
                    <img
                        src="images/ads-for-business.jpg"
                        alt="course1"
                        class="course-cover"
                    />
                </router-link>

                <q-btn
                    label="Más Información"
                    to="ads-for-business"
                    class="bg-accent q-my-md"
                ></q-btn>
            </div>
            <div class="column items-center justify-evenly web-container">
                <router-link to="ads-profesional">
                    <img
                        src="images/portada-ads-pro.jpg"
                        alt="course1"
                        class="course-cover"
                    />
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
.courses-container {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.course-cover {
    max-width: 240px;
    object-fit: cover;
    margin: 8px;
    animation-duration: 3s;
    animation-name: slidein;
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

@media screen and (max-width: 720px) {
    .courses-container {
        flex-direction: column;
    }
}
</style>
