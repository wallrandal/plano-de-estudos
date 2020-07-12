<template>
    <div class="container">
        <div class="d-flex flex-wrap">
            <div class="image m-2" style="border: 1px solid pink" v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" v-show="image.status">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            images: [
                {status: true, alt: 'certificado', src: '/images/certificado1-min.png'},
                {status: false, alt: 'certificado', src: '/images/certificado2-min.png'},
                {status: false, alt: 'certificado', src: '/images/certificado3-min.png'},
                {status: true, alt: 'certificado', src: '/images/certificado4-min.png'},
                {status: false, alt: 'github', src: '/images/github-min.png'},
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
        max-width: 40vh;
        img {
            min-height: inherit;
            max-height: inherit;
            min-width: inherit;
            max-width: inherit;
        }
    }
}
</style>