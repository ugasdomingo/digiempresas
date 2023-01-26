<template>
    <div class="row text-white col-12 justify-evenly menu2-container">
        <q-btn
            label="Servicios"
            @click="handleClick('services')"
            class="buttom-navbar"
        ></q-btn>
        <q-btn
            label="Portafolio"
            @click="handleClick('portfolio')"
            class="buttom-navbar"
        ></q-btn>
        <q-btn
            label="Cursos"
            @click="handleClick('courses')"
            class="buttom-navbar"
        ></q-btn>
        <q-btn
            label="Presupuesto"
            @click="handleClick('quotes')"
            class="bg-accent buttom-navbar"
        ></q-btn>
    </div>
</template>

<script setup lang="ts">
import { useNavBarStore } from 'src/stores/navBar-store';

const navBarStore = useNavBarStore();

const handleClick = (page: string) => {
    navBarStore.navigation(page);
};
</script>

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
        font-size: 12px;
    }
}
@media screen and (max-width: 380px) {
    .buttom-navbar {
        font-size: 10px;
    }
}
</style>
