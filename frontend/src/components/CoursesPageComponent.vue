<template>
    <q-page class="column neoteric text-white justify-evenly gradiant">
        <div class="row items-center justify-evenly web-container">
            <h5 class="q-pb-md q-mb-none">Próximas formaciones:</h5>
            <img src="images/ads-basico.jpg" alt="course1" />
            <q-btn
                label="Comprar Curso"
                target="blank"
                href="https://wa.me/34604822385"
                class="bg-accent q-my-md"
            ></q-btn>
        </div>
    </q-page>
</template>

<script setup lang="ts"></script>

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
        margin-bottom: 100%;
        width: 300%;
    }
    to {
        margin-bottom: 0%;
        width: 100%;
    }
}
</style>
