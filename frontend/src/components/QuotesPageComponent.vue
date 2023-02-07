<template>
    <q-page class="column text-white flex-center gradiant">
        <div class="column flex-center web-container">
            <h5 class="q-pb-md q-mb-none neoteric">Cotización</h5>
            <q-form @submit.prevent="handleSubmit" class="form-container">
                <q-input
                    v-model="firstName"
                    label="Nombre"
                    type="text"
                    dark
                    color="grey"
                    lazy-rules
                    :rules="[
                        (val: string | any[]) =>
                            (val && val.length > 0) || 'Por favor escribe tu nombre',
                    ]"
                ></q-input>
                <q-input
                    v-model="email"
                    dark
                    label="Email"
                    type="text"
                    :rules="[
                        (val) =>
                            (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                            'Formato email incorrecto',
                    ]"
                ></q-input>
                <q-select
                    v-model="sizeCompany"
                    dark
                    :options="options"
                    label="Tamaño de tu negocio"
                    :rules="[
                        (val: string | any[]) =>
                            (val && val.length > 0) || 'Por favor selecciona una opción',
                    ]"
                />
            </q-form>
            <q-btn label="Cotizar" class="bg-accent q-my-md"></q-btn>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const firstName = ref('');
const email = ref('');
const sizeCompany = ref('');
const services = ref([]);

const options = [
    '1 - 5 personas',
    '6 - 10 personas',
    '11 - 25 personas',
    '26 - 50 personas',
    '+50 personas',
];
</script>

<style lang="scss" scoped>
img {
    max-width: 240px;
    object-fit: cover;
    margin: 8px;
}
.web-container {
    border: solid 1px white;
    border-radius: 16px;
    padding: 4px 8px;
    width: 50%;
}
.form-container {
    width: 100%;
}

@media screen and (max-width: 500px) {
    .web-container {
        width: 80%;
    }
}
</style>
