<script setup lang="ts"></script>

<template>
    <div class="row text-white col-12 justify-evenly menu2-container">
        <q-btn label="Servicios" to="servicios" class="buttom-navbar"></q-btn>
        <q-btn label="Portafolio" to="portafolio" class="buttom-navbar"></q-btn>
        <q-btn label="Cursos" to="cursos" class="buttom-navbar"></q-btn>
        <q-btn
            label="Presupuesto"
            target="blank"
            href="https://wa.me/34604822385"
            class="bg-accent buttom-navbar"
        ></q-btn>
    </div>
</template>

<style lang="scss" scoped>
.menu2-container {
    background-color: rgba($color: #233b98, $alpha: 0.7);
}
.buttom-navbar {
    border-radius: 4px;
    margin: 0px;
}
@media screen and (max-width: 500px) {
    .buttom-navbar {
        font-size: 10px;
    }
}
</style>
