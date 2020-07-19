<template>
    <div class="slides">
         <transition name="component-fade"
                    mode="out-in">
            <router-view></router-view>
        </transition>
    </div>  
</template>
<style lang="scss" scoped>
    .slides {
        margin: 10vh;
        // min-height: 70vh;
        // min-width: 100vh;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }

  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>