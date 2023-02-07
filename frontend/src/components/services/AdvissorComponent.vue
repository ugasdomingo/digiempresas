<template>
    <div class="gradiant">
        <div class="column flex-center q-mb-md">
            <h5 class="q-pb-none q-mb-md text-white neoteric">
                Asesoría profesional sin compromisos.
            </h5>
            <q-list dark bordered separator class="text-center">
                <q-item v-ripple>
                    <q-item-section>Duración: 45 minutos</q-item-section>
                </q-item>
                <q-item v-ripple>
                    <q-item-section>Con: CEO Domingo Ugas</q-item-section>
                </q-item>
            </q-list>
        </div>
        <div class="card-containers">
            <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-card-section>
                    <h5>Creación y Lanzamiento de negocios</h5>
                    <p>
                        Saber cuales herramientas, estrategias y/o presupuesto
                        de publicidad usar para comenzar tu negocio es vital
                        para su éxito, te prestamos nuestra experiencia para que
                        tomes las mejores decisiones.
                    </p>
                </q-card-section>
                <q-card-actions>
                    <q-btn color="primary" label="Agendar Asesoría" />
                </q-card-actions>
            </q-card>

            <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-card-section>
                    <h5>Transformación y Crecimiento digital</h5>
                    <p>
                        Hacer crecer tu negocio va más a allá de ofrecer tu
                        producto o servicio a más y más personas. A veces es
                        necesario iterar tu producto o servicio, o aprovechar
                        una oportunidad en el mercado. Y por supuesto hay que
                        saber como detectar y aprovechar esa oportunidad.
                    </p>
                </q-card-section>
                <q-card-actions>
                    <q-btn color="primary" label="Agendar Asesoría" />
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
