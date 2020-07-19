<template>
    <div class="d-flex justify-content-center flex-wrap">
            <img v-for="(image, index) in images" 
                 :key="index" 
                 class="p-2 img-fluid rounded" 
                 :src="image.src" 
                 :alt="image.alt" 
                 v-show="image.status">
    </div>
</template>
<script>

export default {
    data () {
        return {
            images: [
                {status: true, alt: 'certificados', src: 'https://i.imgur.com/f0letEi.png'},
                {status: true, alt: 'github', src: 'https://i.imgur.com/NbawD4V.png'},
            ],
        };
    },
}
</script>
<style lang="scss" scoped >
    $breakpoint-tablet: 768px;

    img {
        width: 40vw;
    }

/* Using plain CSS */
@media (max-width: $breakpoint-tablet) {
    img {
        width: 40vh;
    }
}
</style>