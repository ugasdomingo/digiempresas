<template>
    <q-layout view="hhh lpR fFf" class="hero-container">
        <q-header class="transparent">
            <q-toolbar>
                <q-toolbar-title>
                    <router-link
                        to="/"
                        class="neoteric text-h3 text-white digiempresas text-shadow"
                        style="text-decoration: none"
                    >
                        <q-avatar
                            rounded
                            size="100px"
                            font-size="82px"
                            class="logo"
                        >
                            <img src="/icons/logo-imagen.png" alt="Logo" />
                        </q-avatar>
                        Digiempresas
                    </router-link>
                </q-toolbar-title>
                <MenuPrincipalComponent class="menu-principal" />
                <q-icon name="menu" class="hamburguer-menu">
                    <q-popup-proxy
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :breakpoint="50"
                    >
                        <MenuPrincipalComponent />
                    </q-popup-proxy>
                </q-icon>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
                <q-btn
                    fab
                    icon="mdi-whatsapp"
                    color="green"
                    target="Blank"
                    href="https://wa.me/34604822385"
                />
            </q-page-sticky>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import MenuPrincipalComponent from 'src/components/layoutsComponents/MenuPrincipalComponent.vue';
</script>

<style lang="scss" scoped>
.hero-container {
    background: rgba(35, 59, 152, 0);
    width: 100%;
    height: 100px;
}
.hamburguer-menu {
    display: none;
}

@media screen and (max-width: 1080px) {
    .digiempresas {
        font-size: 36px;
    }
    .logo {
        display: none;
    }
    .menu-principal {
        display: none;
    }
    .hamburguer-menu {
        display: inline;
    }
}
</style>
