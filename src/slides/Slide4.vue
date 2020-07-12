<template>
    <div class="container">
        <div class="d-flex flex-wrap">
            <div class="image m-2" style="border: 1px solid pink" v-for="(image, index) in images" :key="index">
               oi tes <img :src="image.src" :alt="image.alt" v-show="image.status">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            images: [
                {status: true, alt: 'certificado', src: 'https://i.imgur.com/gCTq5gs.png'},
                {status: true, alt: 'certificado', src: 'https://i.imgur.com/Ml0gl5S.png'},
                {status: true, alt: 'certificado', src: 'https://i.imgur.com/xZQCuYK.png'},
                {status: true, alt: 'certificado', src: 'https://i.imgur.com/oNtvc6y.png'},
                {status: true, alt: 'github', src: 'https://i.imgur.com/s2nZg3F.png'},
            ],
        };
    },
}
</script>
<style lang="scss" scoped >
.container {
    min-height: 75vh;
    .image{
        min-height: 30vh;
        max-height: 30vh;
        min-width: 40vh;
        max-width: 80vh;
        img {
            min-height: inherit;
            max-height: inherit;
            min-width: inherit;
            max-width: inherit;
        }
    }
}
</style>