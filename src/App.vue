<template>
  <div id="app" class="app">
    <lottery v-if="!isShowGift" @showGift="showGift" />
    <gift v-else />
  </div>
</template>

<script>
import Lottery from './components/Lottery.vue'
import Gift from './components/Gift.vue'
import { GLOBAL_KEYS } from './gift.setting.js';
export default {
  name: 'App',
  components: { Lottery, Gift },
  data() {
    return {
      isShowGift: false,
    }
  },

  methods: {
    checkLocalGift() {
      const hasGift = localStorage.getItem(GLOBAL_KEYS.EXIST_KEY);
      if (!!hasGift === true) {
        this.isShowGift = true;
      }
    },

    showGift() {
      this.isShowGift = true;
    },
  },
  
  created() {
    this.checkLocalGift();
  },

  mounted() {},
};
</script>

<style>
.app {
  font-family: Muyao, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-image: url(./assets/images/bg.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.full-screen {
  width: 100vw;
  height: 100vh;
}


</style>
