<script setup lang="ts">
//Import Text
import { contentAdsBusiness } from 'pages/courses/coursesInformations';
import AdsForBusinessFormComponent from 'src/components/hubspotforms/AdsForBusinessFormComponent.vue';
</script>

<template>
    <q-page>
        <div class="column">
            <div class="row col-12 justify-evenly">
                <q-card class="col-12 col-md-5 q-my-xl q-pa-xl">
                    <q-img src="images/ads-for-business.jpg"></q-img>
                    <q-card-section class="column flex-center">
                        <AdsForBusinessFormComponent />
                    </q-card-section>
                </q-card>
                <q-card class="col-12 col-md-5 q-my-xl">
                    <q-card-section>
                        <h3>{{ contentAdsBusiness.title }}</h3>
                    </q-card-section>
                    <q-separator inset />

                    <!-- Courses descriptions -->
                    <q-card-section>
                        <p>{{ contentAdsBusiness.p1 }}</p>
                        <p>{{ contentAdsBusiness.p2 }}</p>
                        <p>{{ contentAdsBusiness.p3 }}</p>
                        <p>{{ contentAdsBusiness.p4 }}</p>
                    </q-card-section>
                    <q-separator inset />

                    <!-- Courses information -->
                    <q-card-section>
                        <h6>{{ contentAdsBusiness.type }}</h6>
                        <p>
                            Clases:
                            <span>{{ contentAdsBusiness.classTime }} </span>
                            <br />

                            Duración:
                            <span> {{ contentAdsBusiness.duration }}</span>
                            <br />

                            Pre-venta:
                            <span>{{ contentAdsBusiness.preSales }}</span>
                            <br />

                            Comienza:
                            <span>{{ contentAdsBusiness.initialDate }}</span>
                            <br />

                            Cupos disponibles:
                            <span>{{ contentAdsBusiness.quorum }}</span>
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
