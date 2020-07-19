<template>
    <div class="container-fuid">
        <div class="row d-flex justify-content-center">
            <app-slides></app-slides>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>

import Footer from "./components/Footer";
import Slides from "./components/Slides";

export default {
    components: {
        appFooter: Footer,
        appSlides: Slides,
    }
}
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    body {
        max-width: 95vw;
        margin: 0 auto;
        background-color: #ffe7ad;
        color: #073b4c;
        h1 {
            font-family: 'Anton', sans-serif;
        }
    }
</style>