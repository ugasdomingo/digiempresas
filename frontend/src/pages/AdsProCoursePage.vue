<script setup lang="ts">
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
                    <q-card-section class="q-pl-xl">
                        <AdsProPaypalComponent />
                    </q-card-section>
                </q-card>
                <q-card class="col-12 col-md-5 q-my-xl">
                    <q-card-section><h3>Ads Pro</h3></q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <p>
                            Esta formación está diseñada tanto para
                            emprendedores y autónomos como para profesionales
                            del marketing que quieran ampliar sus conocimientos.
                            Usaremos 3 casos prácticos para generar Ads en
                            Google Ads, Meta Ads, Twitter Ads y LinkedIn Ads.
                        </p>
                        <p>
                            Al finalizar la formación estarás en la capacidad de
                            darle buena visiilidad a tus negocios o clientes
                            tanto en Google como en las distintas redes
                            sociales. Tendrás a tu disposición las estrategias
                            que usamos en nuestra agencia para optimizar tus
                            resultados.
                        </p>
                        <p>
                            Las clases serán online, a través de Zoom y quedarán
                            grabadas para que puedas repasarlas cuantas veces
                            necesites. El precio de cada clase es de 60 euros,
                            pero puedes ahorrar pagando toda la formación en 250
                            euros. Puedes pagar la clase hasta 1 hora antes de
                            empezar.
                        </p>
                        <p>
                            Al terminar las clases tendremos 2 sesiones más de
                            prácticas para quienes deseen probar Ads para sus
                            negocios o clientes. También una sesión en privado
                            para aclarar dudas o recibir asesoría personalizada
                        </p>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Online</h6>
                        <p>
                            Clases:
                            <span>
                                Jueves 07:00 pm y Sábados 11:00 am Madrid
                            </span>

                            <br />
                            Duración: <span>5 Semanas</span>
                            <br />
                            Inversión: <span>250 euros</span>
                            <br />
                            Comienza: <span>03 de Junio 2023</span>
                            <br />
                            Cupos disponibles: <span>20 personas</span>
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
