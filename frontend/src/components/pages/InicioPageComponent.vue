<script setup lang="ts"></script>

<template>
    <q-page class="column flex-center hero-container">
        <img src="images/Hero-grande.jpg" alt="Hero" class="hero-img-big" />
        <img src="images/Hero-pequeño.jpg" alt="Hero" class="hero-img-small" />
        <div class="column text-white text-center flex-center">
            <p class="q-mb-none q-pt-md">Agencia de Marketing Digital</p>
            <h2 class="q-my-xs q-py-xs neoteric title-inicio">
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
.hero-img-big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -1;
}
.hero-img-small {
    display: none;
}
.hero-container {
    background: rgba(35, 59, 152, 0.7);
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
}
</style>
