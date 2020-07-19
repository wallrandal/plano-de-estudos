<template>
    <div class="col-xs-12">
        <div class="footer d-flex justify-content-around wrap">
            <router-link :to="previous">
                <button class="btn btn-primary">
                    Anterior
                </button>
            </router-link>
            <router-link :to="next">
                <button class="btn btn-primary">
                    Próximo
                </button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        next () {
            let currentSlideNumber = this.$route.name;
            currentSlideNumber++;
            return `/${currentSlideNumber}`;
        },
        previous () {
            let currentSlideNumber = this.$route.name;
            currentSlideNumber--;
            return `/${currentSlideNumber}`;
        },
    }
}
</script>
<style lang="scss" scoped>
    .footer {
        position: fixed;
        bottom: 0;
        padding-bottom: 10vh;
        margin: 0 auto;
        width: 100%;
        .btn-primary {
            background-color: #118ab2;
            font-weight: bold;
            &:hover {
                background-color: #073B4C;
            }
        }
    }
</style>