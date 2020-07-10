<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <figure v-for="(image, index) in imagesShow" :key="index">
                <transition>
                    <img class="img-fluid" :src="image.src" :alt="image.alt">    
                </transition>
            </figure>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            images: [
                {alt: 'certificado', src: '/images/certificado.png'},
                {alt: 'certificado', src: '/images/certificado3.png'},
                {alt: 'certificado', src: '/images/certificado4.png'},
                {alt: 'certificado', src: '/images/certificado5.png'},
                {alt: 'github', src: '/images/github.png'},
            ],
            imagesShow: [],
        };
    },
    created () {
        let i = 0;

        const interval = setInterval(() => {
            if(i < this.images.length) {
                this.imagesShow.push(this.images[i]);
                
            } else {
                clearInterval(interval);
            }
            i++;
        }, 500);
    }
}
</script>
<style lang="scss" scoped >
.container {
    min-height: 75vh;
    .row {
        img {
            max-height: 30vh;
            width: auto;
        }
    }
}

</style>