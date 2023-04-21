<script setup lang="ts"></script>

<template>
    <div class="marketing-container">
        <div class="column flex-center text-white q-ma-md info-container">
            <h2 class="q-my-md">Marketing 360</h2>
            <p class="q-px-xs">
                Ponemos un departamento completo de marketing a disposición de
                tu negocio.
            </p>
        </div>
        <div class="bg-white q-pa-md">
            <p class="q-ma-none">
                Sabemos lo difícil que es armar un buen equipo de Marketing, por
                eso te ofrecemos un equipo efectivo y listo para gestionar el
                Marketing de tu negocio, pagando solo un fee mensual que se
                ajusta al tamaño de tu empresao negocio.
            </p>
        </div>
        <div class="column text-black description-container">
            <h5 class="q-my-md">Servicios Incluidos:</h5>
            <ul>
                <li>
                    <strong>Redes Sociales: </strong> Creamos contenido para sus
                    redes sociales en base a a la estrategia establecida.
                </li>
                <li>
                    <strong>Webmaster: </strong> Gestionamos su página o
                    aplicación web para obtener los mejores resultados posibles.
                    SEO, Experiencia de usuario, Diseño de interfaz, otros...
                </li>
                <li>
                    <strong>Google Ads: </strong> Gestionamos su publicidad en
                    Google y YouTube.
                </li>
                <li>
                    <strong>Social Ads: </strong> Gestionamos su publicidad en
                    Redes Sociales.
                </li>
                <li>
                    <strong>Opcional: </strong> Gestion de actividades y eventos
                    de marketing presencial en su local.
                </li>
            </ul>
            <q-btn
                label="Solicitar Cotización"
                href="https://wa.me/34604822385"
                class="services-btn"
                target="blank"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.marketing-container {
    width: 100%;
    background-image: url('images/fondo-6.jpg');
    background-size: cover;
}
.info-container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
}
.description-container {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    margin: 16px 4px;
    padding: 4px;
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
