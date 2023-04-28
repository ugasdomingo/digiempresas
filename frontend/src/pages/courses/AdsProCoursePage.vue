<script setup lang="ts">
//Import Text
import { contentAdsPro } from 'pages/courses/coursesInformations';
import AdsProPaypalComponent from 'components/paymentsComponents/AdsProPaypalComponent.vue';
</script>

<template>
    <q-page>
        <div class="column">
            <div class="row col-12 justify-evenly">
                <q-card class="col-12 col-md-5 q-my-xl q-pa-xl">
                    <q-img
                        src="https://res.cloudinary.com/minteados/image/upload/v1676544996/Digiempresas/ads-clases_kkb0ol.png"
                    ></q-img>
                    <q-card-section class="q-pt-xl">
                        <AdsProPaypalComponent />
                    </q-card-section>
                </q-card>
                <q-card class="col-12 col-md-5 q-my-xl">
                    <q-card-section>
                        <h3>{{ contentAdsPro.title }}</h3>
                    </q-card-section>
                    <q-separator inset />

                    <!-- Courses descriptions -->
                    <q-card-section>
                        <p>{{ contentAdsPro.p1 }}</p>
                        <p>{{ contentAdsPro.p2 }}</p>
                        <p>{{ contentAdsPro.p3 }}</p>
                        <p>{{ contentAdsPro.p4 }}</p>
                    </q-card-section>
                    <q-separator inset />

                    <!-- Courses information -->
                    <q-card-section>
                        <h6>{{ contentAdsPro.type }}</h6>
                        <p>
                            Clases: <span>{{ contentAdsPro.classTime }} </span>
                            <br />

                            Duración: <span> {{ contentAdsPro.duration }}</span>
                            <br />

                            Pre-venta: <span>{{ contentAdsPro.preSales }}</span>
                            <br />

                            Comienza:
                            <span>{{ contentAdsPro.initialDate }}</span>
                            <br />

                            Cupos disponibles:
                            <span>{{ contentAdsPro.quorum }}</span>
                        </p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
span {
    font-weight: 600;
}
h6 {
    margin: 4px;
}
</style>
