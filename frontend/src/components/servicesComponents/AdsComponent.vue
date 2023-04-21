<script setup lang="ts"></script>

<template>
    <div class="ads-container">
        <div class="column flex-center text-white q-ma-md info-container">
            <h2 class="q-my-md">Ads All-in-one</h2>
            <p class="q-px-xs">Llega a más potenciales clientes.</p>
        </div>
        <div class="bg-white q-pa-md">
            <p class="q-ma-none">
                Sabemos lo difícil que es llegar a tu público objetivo, con Ads
                All-in-one podrás poner tu solución o servicio delante de las
                personas que lo necesitan.
            </p>
        </div>
        <div class="column text-black description-container">
            <h5 class="q-my-md">Canales Incluidos:</h5>
            <ul>
                <li>
                    <strong>Google Ads: </strong> Te ubicamos de primero en las
                    búsquedas de Google.
                </li>
                <li>
                    <strong>YouTube Ads: </strong> Pon tus vídeos promocionales
                    a la vista de todos en YouTube.
                </li>
                <li>
                    <strong>Meta Ads: </strong> Llega a tu público objetivo en
                    Facebook e Instagram
                </li>
                <li>
                    <strong>Twitter Ads: </strong> Gestionamos su publicidad en
                    Twitter.
                </li>
                <li>
                    <strong>LinkedIn Ads: </strong> Gestionamos su publicidad en
                    LinkedIn.
                </li>
                <li>
                    <strong>Tiktok Ads: </strong> Gestionamos su publicidad en
                    TikTok.
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
.ads-container {
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
