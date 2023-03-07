<template>
    <q-layout view="hhh lpR fFf" class="hero-container">
        <img src="images/Hero-grande.jpg" alt="Hero" class="hero-img-big" />
        <img src="images/Hero-pequeño.jpg" alt="Hero" class="hero-img-small" />
        <q-header class="transparent">
            <q-toolbar>
                <q-toolbar-title>
                    <router-link
                        to="/"
                        @click="handleClick('inicio')"
                        class="neoteric text-h3 text-white digiempresas"
                        style="text-decoration: none"
                    >
                        <q-avatar rounded size="100px" font-size="82px">
                            <img src="/icons/logo-imagen.png" alt="Logo" />
                        </q-avatar>
                        Digiempresas
                    </router-link>
                </q-toolbar-title>
                <MenuPrincipalComponent class="menu-principal" />
            </q-toolbar>
            <MenuSecondaryComponent class="menu-secondary" />
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
import MenuPrincipalComponent from 'src/components/menus/MenuPrincipalComponent.vue';
import MenuSecondaryComponent from 'src/components/menus/MenuSecondaryComponent.vue';
import { useNavBarStore } from 'src/stores/navBar-store';

const navBarStore = useNavBarStore();

const handleClick = (page: string) => {
    navBarStore.navigation(page);
};
</script>

<style lang="scss" scoped>
.menu-secondary {
    display: none;
}
.hero-container {
    background: rgba(35, 59, 152, 0.7);
}
.hero-img-big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -100;
}
.hero-img-small {
    display: none;
}
@media screen and (max-width: 1080px) {
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
    .digiempresas {
        font-size: 36px;
    }
    .menu-principal {
        display: none;
    }
    .menu-secondary {
        display: flex;
        width: 100%;
    }
}
</style>
