<script setup lang="ts"></script>

<template>
    <q-page class="column flex-center">
        <div class="column text-white text-center flex-center">
            <p class="q-mb-none">Agencia de Marketing Digital</p>
            <h2 class="q-my-xs q-py-xs neoteric title-inicio text-shadow">
                Descansa, nos encargamos de todo
            </h2>
            <p>
                Páginas y Aplicaciones Web, Redes Sociales, Automatizaciones y
                más
            </p>
        </div>
    </q-page>
</template>

<style scoped lang="scss">
h2 {
    animation-duration: 3s;
    animation-name: slidein;
}
.hero-container div p {
    font-size: 20px;
}

@keyframes slidein {
    from {
        margin-bottom: 100%;
        width: 300%;
    }
    to {
        margin-bottom: 0%;
        width: 100%;
    }
}

@media screen and (max-width: 720px) {
    .title-inicio {
        font-size: 48px;
    }
}
</style>
