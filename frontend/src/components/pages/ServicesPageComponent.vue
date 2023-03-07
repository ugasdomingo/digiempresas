<script setup lang="ts">
import { ref } from 'vue';
import MarketingComponent from '../services/MarketingComponent.vue';
import WebsComponent from '../services/WebsComponent.vue';
import AdvissorComponent from '../services/AdvissorComponent.vue';

const marketing = ref(false);
const webs = ref(false);
const advissor = ref(false);
</script>

<template>
    <q-page
        class="column items-center neoteric text-center justify-evenly services-container"
    >
        <div class="row flex-center individual-container">
            <img
                src="images/social-media-small.png"
                alt="marketing"
                style="width: 150px"
            />
            <q-btn
                label="Marketing Digital"
                glossy
                class="services-buttom bg-accent q-ml-md"
                @click="marketing = !marketing"
            >
                <q-dialog v-model="marketing">
                    <MarketingComponent />
                </q-dialog>
            </q-btn>
        </div>
        <div class="row flex-center individual-container">
            <img
                src="images/web-sites-small.png"
                alt="web-sites"
                style="width: 150px"
            />
            <q-btn
                label="Páginas y Aplicaciones Web"
                glossy
                class="services-buttom bg-accent q-ml-md"
                @click="webs = !webs"
            >
                <q-dialog v-model="webs">
                    <WebsComponent />
                </q-dialog>
            </q-btn>
        </div>
        <div class="row flex-center individual-container">
            <img
                src="images/advissor-small.png"
                alt="web-sites"
                style="width: 150px"
            />
            <q-btn
                label="Asesoría Gratuita Marketing y Tecnología"
                glossy
                class="services-buttom bg-accent q-ml-md"
                @click="advissor = !advissor"
            >
                <q-dialog v-model="advissor">
                    <AdvissorComponent />
                </q-dialog>
            </q-btn>
        </div>
    </q-page>
</template>

<style scoped lang="scss">
.individual-container {
    width: 70%;
}
.services-container {
    width: 100%;
}
.services-buttom {
    width: 50%;
    color: white;
    padding: 8px;
    background-color: rgba($color: #fb851b, $alpha: 0.8);
    border-radius: 8px;
    font-size: 20px;
    animation-duration: 1s;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        margin-left: 3%;
    }
    to {
        margin-left: 0%;
    }
}

@media screen and (max-width: 720px) {
    .hero-img-big {
        display: none;
    }
    .hero-img-small {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: fixed;
        z-index: -1;
    }
    .services-buttom {
        width: 80%;
    }
}
</style>
