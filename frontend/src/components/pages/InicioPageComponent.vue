<script setup lang="ts"></script>

<template>
    <q-page class="column page-container">
        <img src="images/fondo-1.jpg" alt="Hero" class="hero-img-big" />
        <main class="column text-white text-center flex-center">
            <h2 class="neoteric title-inicio text-shadow">
                Descansa, nos encargamos de todo
            </h2>
            <div class="hero-info">
                <h4 class="q-my-none">Agencia de Marketing Digital</h4>
                <p class="q-my-none">
                    Páginas y Aplicaciones Web, Ads para Redes Sociales y Google
                </p>
            </div>
            <q-btn label="Ver servicios" to="servicios" class="services-btn" />
        </main>
    </q-page>
</template>

<style scoped lang="scss">
h2 {
    font-size: 6em;
}
p {
    font-size: 16px;
    color: $accent;
}
main {
    animation-duration: 2.5s;
    animation-name: slidein;
    width: 100%;
    padding: 3em 0 0;
}
.page-container {
    width: 100%;
    height: 80vh;
    box-sizing: border-box;
}
.hero-img-big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
}
.hero-info {
    width: auto;
    padding: 0.5em 1.5em;
    margin: 0 0 1.5em;
    background-color: $primaryopacity;
    border-radius: 8px;
}
.services-btn {
    width: 250px;
    font-size: 14px;
    padding: 0.7em 0;
    border: 1px solid whitesmoke;
}
@keyframes slidein {
    from {
        margin-left: 100%;
        width: 200%;
    }

    to {
        margin-left: 0%;
        width: 100%;
    }
}

@media screen and (max-width: 720px) {
    main {
        display: flex;
        flex-direction: column;
        padding: 1em 0;
        align-items: center;
    }
    h4 {
        font-size: 26px;
    }
    .hero-info {
        width: 80%;
        margin-bottom: 5em;
    }
    .title-inicio {
        font-size: 48px;
    }
}
</style>
