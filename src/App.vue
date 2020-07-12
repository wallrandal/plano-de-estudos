<template>
  <div>
    <div class="slides p-5">
        <transition name="component-fade"
                    mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
    <div class="footer">
      <div class="p-2 buttons d-flex justify-content-around">
        <router-link :to="previous">
          <button class="btn btn-info" :disabled="previousIsDisabled" >Próximo</button>
        </router-link>
        <div class="slide-count">
          {{slideCount}} testinho
        </div>
        <router-link :to="next">
          <button class="btn btn-info" :disabled="nextIsDisabled" >Próximo</button>
        </router-link>
      </div>
    </div>
  </div>  
</template>
<script>

export default {
  data () {
    return {
      startedAt: 1,
      currentComponent: 'slide-1',
      maxNumberOfSlides: 4,
    };
  },
  methods: {
    passSlide(action) {
      let currentSlideNumber = this.$route.name;
      action == 'next' ? currentSlideNumber++ : currentSlideNumber--;
      this.$router.push(`/${currentSlideNumber}`);
    },
  },
  computed: {
    nextIsDisabled() {
      let currentSlideNumber = this.$route.name;
      return parseInt(currentSlideNumber) >= this.maxNumberOfSlides;
    },
    previousIsDisabled() {
      let currentSlideNumber = this.$route.name;
      return currentSlideNumber <= 1;
    },
    slideCount() {
      let currentSlideNumber = this.$route.name;
      return `${currentSlideNumber}/${this.maxNumberOfSlides}`;
    },
    next () {
      let currentSlideNumber = this.$route.name;
      currentSlideNumber++;
      return `/${currentSlideNumber}`;
    },
    previous () {
      let currentSlideNumber = this.$route.name;
      currentSlideNumber--;
      return `/${currentSlideNumber}`;
    }
  },
  created () {
    window.addEventListener("keyup", e => {
      if (e.keyCode == 37) {
        let currentSlideNumber = this.$route.name;
        currentSlideNumber--;
        if(currentSlideNumber >= 1) {
          this.$router.push(`/${currentSlideNumber}`)
        }
      }

      if (e.keyCode == 39 || e.keyCode == 32) {
        let currentSlideNumber = this.$route.name;
        currentSlideNumber++;
        if(currentSlideNumber <= this.maxNumberOfSlides) {
          this.$router.push(`/${currentSlideNumber}`)
        }
      }

    });
  }

  
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  body {
    font-family: 'Quicksand', sans-serif;
    background-color: lightcyan;
    .slides {
      width: 100%;
      min-height: 75vh;
    }

    .buttons {
      width: 100%;
    }
    .slide-count {
      font-weight: bold;
    }
  }

  .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
  }

  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>