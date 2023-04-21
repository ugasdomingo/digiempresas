<script setup lang="ts"></script>

<template>
    <q-btn-group class="group-menu">
        <q-btn class="botton-group" to="/servicios" glossy label="Servicios" />
        <q-btn class="botton-group" to="/cursos" glossy label="Cursos" />
        <q-btn
            class="botton-group"
            to="/portafolio"
            glossy
            label="Portafolio"
        />
        <q-btn
            class="botton-final"
            color="accent"
            href="https://wa.me/34604822385"
            glossy
            label="Presupuesto gratuito"
            target="blank"
        />
    </q-btn-group>
</template>

<style lang="scss" scoped>
.botton-group {
    background-color: $primary;
    font-size: 14px;
}
.botton-final {
    font-size: 14px;
}
@media screen and (max-width: 760px) {
    .group-menu {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: white;
        background-color: rgb(0, 0, 0, 0.7);
    }
}
</style>
