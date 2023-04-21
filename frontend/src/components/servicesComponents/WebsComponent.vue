<script setup lang="ts"></script>

<template>
    <div class="web-container">
        <div
            class="column flex-center text-white q-my-xl q-mx-xs website-container"
        >
            <h2 class="q-my-md">Páginas Web</h2>
            <p class="q-px-xs">
                Ideal si necesitas mostrar tus servicios o tener una tienda
                virtual.
            </p>
            <q-btn
                label="Solicitar Cotización"
                href="https://wa.me/34604822385"
                class="services-btn"
                target="blank"
            />
        </div>
        <div
            class="column flex-center text-white q-my-xl q-mx-xs appweb-container"
        >
            <h2 class="q-my-md">Aplicaciones Web</h2>
            <p class="q-px-xs">
                Ideal para automatizar tu negocio y mejorar la experiencia de
                tus clientes.
            </p>
            <q-btn
                label="Solicitar Cotización"
                href="https://wa.me/34604822385"
                class="services-btn"
                target="blank"
            />
        </div>
        <div class="bg-white q-pa-md">
            <p class="q-ma-none">
                Todas las páginas y aplicaciones web pasan por un preceso de
                diseño de experiencia de usaurio basado en la estrategia de
                mareketing de la marca. También hacemos el diseño de la
                interfaz, la cual siempre es aprobado por el cliente. Con todas
                las revisiones necesarias hasta alcanzar la máxima satisfacción.
            </p>
            <p class="q-py-md">Solicita tu Presupuesto sin compromiso</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.web-container {
    width: 100%;
    background-image: url('images/fondo-8.jpg');
    background-size: cover;
}
.website-container {
    background-color: $primaryopacity;
    border-radius: 8px;
}
.appweb-container {
    background-color: $accentopacity;
    border-radius: 8px;
}
.services-btn {
    font-size: 12px;
    border: 1px solid whitesmoke;
    margin-bottom: 8px;
}

@media screen and (max-width: 720px) {
    h2 {
        font-size: 34px;
    }
}
</style>
