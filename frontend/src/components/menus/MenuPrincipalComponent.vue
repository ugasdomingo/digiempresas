<script setup lang="ts"></script>

<template>
    <q-tabs align="right" class="neoteric" style="font-size: 48px">
        <q-route-tab to="servicios" label="Servicios" class="buttom-navbar" />
        <q-route-tab to="portafolio" label="Portafolio" class="buttom-navbar" />
        <q-route-tab to="cursos" label="Cursos" class="buttom-navbar" />
        <q-route-tab
            target="blank"
            href="https://wa.me/34604822385"
            label="Solicitar Presupuesto"
            class="bg-accent buttom-navbar"
        />
    </q-tabs>
</template>

<style lang="scss" scoped>
.buttom-navbar {
    margin: 0px 8px;
    border-radius: 4px;
}
</style>
