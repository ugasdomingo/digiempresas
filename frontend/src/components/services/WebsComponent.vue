<template>
    <div class="gradiant">
        <div class="column flex-center q-mb-md">
            <h5 class="q-pb-none q-mb-md text-white neoteric">
                Todos nuestros servicios de Web Inlcuyen:
            </h5>
            <q-list dark bordered separator class="text-center">
                <q-item v-ripple>
                    <q-item-section>Dominio ".com" por 12 meses</q-item-section>
                </q-item>
                <q-item v-ripple>
                    <q-item-section>Hosting por 12 meses</q-item-section>
                </q-item>
            </q-list>
        </div>
        <div class="card-containers">
            <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-card-section>
                    <h5>Web Standard</h5>
                    <p>
                        Ideal para emprendimientos y pequeños negocios, tendrás
                        una página web profesional o una tienda virtual para
                        empezar a exponenciar el crecimiento de tu negocio.
                    </p>
                </q-card-section>
                <q-card-actions>
                    <q-btn color="primary" label="Agregar a Cotización" />
                </q-card-actions>
            </q-card>

            <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-card-section>
                    <h5>Web Application</h5>
                    <p>
                        Ideal para empresas que quieren ir más allá, integrando
                        y automatizando sus procesos de negocio para innovar y
                        diferenciarse en el mercado.
                    </p>
                </q-card-section>
                <q-card-actions>
                    <q-btn color="primary" label="Agregar a Cotización" />
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-containers {
    display: flex;
}
.my-card {
    max-width: 50%;
    margin: 4px;
}
</style>
