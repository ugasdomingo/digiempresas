<template>
    <q-page
        class="column items-center neoteric text-center justify-evenly services-container"
    >
        <img src="images/Hero-grande.jpg" alt="Hero" class="hero-img-big" />
        <img src="images/Hero-pequeño.jpg" alt="Hero" class="hero-img-small" />
        <q-btn
            label="Marketing Digital"
            glossy
            class="services-buttom bg-accent"
        ></q-btn>
        <q-btn
            label="Páginas y Aplicaciones Web"
            glossy
            class="services-buttom bg-accent"
        ></q-btn>
        <q-btn
            label="Gestion de Ads"
            glossy
            class="services-buttom bg-accent"
        ></q-btn>
    </q-page>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.services-container {
    background-color: rgba(35, 59, 152, 0.7);
}
.services-buttom {
    width: 50%;
    color: white;
    padding: 8px;
    background-color: rgba($color: #fb851b, $alpha: 0.8);
    border-radius: 8px;
    font-size: 20px;
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
