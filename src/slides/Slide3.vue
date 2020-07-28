<template>
    <div class="row d-flex justify-content-center">
        <figure>
            <img src="https://i.imgur.com/hOFChuP.png" 
                 title="source: imgur.com" 
                 class="img-fluid mx-auto d-block rounded m-4"/>
            <figcaption>É normal não estar bem!</figcaption>
        </figure>
    </div>
</template>
<style lang="scss" scoped >
$breakpoint-tablet: 768px;

img {
    width: 36vw;
}

/* Using plain CSS */
@media (max-width: $breakpoint-tablet) {
    img {
        width: 50vh;
    }
}
</style>