<script setup lang="ts">
import { ref } from 'vue';
import MarketingComponent from 'components/servicesComponents/MarketingComponent.vue';
import WebsComponent from 'components/servicesComponents/WebsComponent.vue';
import AdsComponent from 'components/servicesComponents/AdsComponent.vue';

const marketing = ref(false);
const webs = ref(false);
const advissor = ref(false);
</script>

<template>
    <q-page class="neoteric services-container">
        <img src="images/fondo-2.jpg" alt="Hero" class="hero-img-big" />

        <div class="individual-container">
            <img src="images/services-rrss.png" alt="marketing" />
            <q-btn
                label="Marketing Digital"
                class="services-buttom"
                @click="marketing = !marketing"
            >
                <q-dialog v-model="marketing">
                    <MarketingComponent />
                </q-dialog>
            </q-btn>
        </div>

        <div class="individual-container">
            <img src="images/services-web.png" alt="web-sites" />
            <q-btn
                label="Páginas y Aplicaciones Web"
                class="services-buttom"
                @click="webs = !webs"
            >
                <q-dialog v-model="webs">
                    <WebsComponent />
                </q-dialog>
            </q-btn>
        </div>

        <div class="individual-container">
            <img src="images/services-ads.png" alt="web-sites" />
            <q-btn
                label="Social y Google Ads"
                class="services-buttom"
                @click="advissor = !advissor"
            >
                <q-dialog v-model="advissor">
                    <AdsComponent />
                </q-dialog>
            </q-btn>
        </div>
    </q-page>
</template>

<style scoped lang="scss">
.hero-img-big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
}
.services-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.individual-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.individual-container img {
    max-width: 60%;
    border-radius: 8px;
}
.services-buttom {
    width: 60%;
    color: white;
    padding: 8px;
    background-color: rgba($color: #fb851b, $alpha: 0.8);
    border-radius: 8px;
    font-size: 16px;
    animation-duration: 2s;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        margin-top: 10%;
    }
    to {
        margin-top: 0%;
    }
}

@media screen and (max-width: 720px) {
    .services-container {
        flex-direction: column;
    }
    .individual-container {
        margin: 1em 0;
    }
    .individual-container img {
        max-width: 70%;
    }
    .services-buttom {
        width: 70%;
    }
}
</style>
