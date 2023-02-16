<script setup lang="ts"></script>

<template>
    <div class="gradiant">
        <div class="column flex-center q-mb-md">
            <h5 class="q-pb-none q-mb-md text-white neoteric">
                Todos nuestros servicios de Marketing Inlcuyen:
            </h5>
            <q-list dark bordered separator class="text-center">
                <q-item v-ripple>
                    <q-item-section>Gestión de Redes Sociales</q-item-section>
                </q-item>
                <q-item v-ripple>
                    <q-item-section>Webmaster</q-item-section>
                </q-item>
                <q-item v-ripple>
                    <q-item-section>Posicionamiento SEO/SEM</q-item-section>
                </q-item>
                <q-item v-ripple>
                    <q-item-section>Gestión de Ads</q-item-section>
                </q-item>
            </q-list>
        </div>
        <div class="card-containers">
            <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-card-section>
                    <h5>Starting Big</h5>
                    <p>
                        Ideal para emprendimientos y autónomos, abriremos un
                        hueco en el mercado para ti, enfocándonos es establecer
                        tu marca y generar una buena base de datos.
                    </p>
                </q-card-section>
                <q-card-actions>
                    <q-btn color="primary" label="Agregar a Cotización" />
                </q-card-actions>
            </q-card>

            <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-card-section>
                    <h5>Growth</h5>
                    <p>
                        Ideal para empresas, nos enfocamos en detectar
                        oportunidades de crecimiento. Explorando nuevos mercados
                        iterando el producto o servicio segun el feedback de tus
                        clientes, entre otros caminos.
                    </p>
                </q-card-section>
                <q-card-actions>
                    <q-btn color="primary" label="Agregar a Cotización" />
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-containers {
    display: flex;
}
.my-card {
    max-width: 50%;
    margin: 4px;
}
</style>
