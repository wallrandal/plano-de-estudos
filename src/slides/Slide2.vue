<template>
    <div class="row">
        <div class="col-5 d-none d-lg-block">
            <img src="https://i.imgur.com/LnKg9J0.png" alt="QR Code">
        </div>
        <div class="col-7">
            <span><strong>Dentro da bio</strong></span>
            <ul>
                <li>
                    <h5>Analista de Sistemas</h5>
                </li>
                <li>
                    <h5>Agile leader</h5>
                </li>
                <li>
                    <h5>Parte do time de Endomarketing</h5>
                </li>
            </ul>
            <span><strong>Também sou</strong></span>
            <ul>
                <li>
                    <h5>Interiorrrr de SP</h5>
                </li>
                <li>
                    <h5>Fã de pokémon</h5>
                </li>
                <li>
                    <h5>Estudante</h5>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped >
$breakpoint-tablet: 768px;

img {
    width: 13vw;
}

/* Using plain CSS */
@media (max-width: $breakpoint-tablet) {
    img {
        width: 50vh;
    }
}
</style>