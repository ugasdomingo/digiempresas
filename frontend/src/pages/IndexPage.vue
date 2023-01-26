<template>
    <InicioPageComponent v-if="navBarStore.showing == 'inicio'" />
    <CoursesPageComponent v-if="navBarStore.showing == 'courses'" />
    <PortfolioPageComponent v-if="navBarStore.showing == 'portfolio'" />
    <QuotesPageComponent v-if="navBarStore.showing == 'quotes'" />
    <ServicesPageComponent v-if="navBarStore.showing == 'services'" />
</template>

<script setup lang="ts">
import InicioPageComponent from 'src/components/InicioPageComponent.vue';
import CoursesPageComponent from 'src/components/CoursesPageComponent.vue';
import PortfolioPageComponent from 'src/components/PortfolioPageComponent.vue';
import QuotesPageComponent from 'src/components/QuotesPageComponent.vue';
import ServicesPageComponent from 'src/components/ServicesPageComponent.vue';

import { useNavBarStore } from 'src/stores/navBar-store';

const navBarStore = useNavBarStore();
</script>
