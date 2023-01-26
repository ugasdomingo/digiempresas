<template>
    <q-tabs align="right" class="neoteric" style="font-size: 48px">
        <q-route-tab
            @click="handleClick('services')"
            label="Servicios"
            class="buttom-navbar"
        />
        <q-route-tab
            @click="handleClick('portfolio')"
            label="Portafolio"
            class="buttom-navbar"
        />
        <q-route-tab
            @click="handleClick('courses')"
            label="Cursos"
            class="buttom-navbar"
        />
        <q-route-tab
            @click="handleClick('quotes')"
            label="Solicitar Presupuesto"
            class="bg-accent buttom-navbar"
        />
    </q-tabs>
</template>

<script setup lang="ts">
import { useNavBarStore } from 'src/stores/navBar-store';

const navBarStore = useNavBarStore();

const handleClick = (page: string) => {
    navBarStore.navigation(page);
};
</script>

<style lang="scss" scoped>
.buttom-navbar {
    margin: 0px 8px;
    border-radius: 4px;
}
</style>
