<template>
  <div>
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <button class="btn btn-primary" :disabled="previousIsDisabled" @click="passSlide('previous')" >Anterior</button>
    <button class="btn btn-primary" :disabled="nextIsDisabled" @click="passSlide('next')">Próximo</button>
  </div>  
</template>
<script>
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';

export default {
  data () {
    return {
      startedAt: 1,
      currentComponent: 'slide-1',
      maxNumberOfSlides: 2,
    };
  },
  methods: {
    passSlide(action) {
      let currentSlideNumber = this.currentComponent.split("-")[1];
      action == 'next' ? currentSlideNumber++ : currentSlideNumber--;
      if(currentSlideNumber <= this.maxNumberOfSlides && currentSlideNumber >= 1 ) {
        this.currentComponent = `slide-${currentSlideNumber}`;
      }
    },
  },
  components: {
    'slide-1' : Slide1,
    'slide-2' : Slide2,
  },
  computed: {
    nextIsDisabled() {
      let currentSlideNumber = this.currentComponent.split("-")[1];
      return currentSlideNumber >= this.maxNumberOfSlides;
    },
    previousIsDisabled() {
      let currentSlideNumber = this.currentComponent.split("-")[1];
      return currentSlideNumber <= 1;
    }
  }

  
}
</script>