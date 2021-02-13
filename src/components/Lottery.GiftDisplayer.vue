<template>
  <div class="lottery-gift-displayer-component full-screen">
    <div class="erkang-bg-top"></div>
    <div class="erkang-bg-bottom">
      <h2>{{ name }}</h2>
      <div class="border-area">
        <img class="gift-image" :src="image" alt="Gift">
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LotteryGiftDisplayer',
  data() {
    return {}
  },
  props: ['name', 'image', 'description'],
}
</script>

<style scoped>
.lottery-gift-displayer-component {
  background-color: #fad3e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.erkang-bg-top {
  width: 306.5px;
  height: 220px;
  background-image: url(../assets/images/erkang-top.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 1;
  position: relative;
  top: 40px;
}
.erkang-bg-bottom {
  width: 385px;
  height: 570px;
  background-image: url(../assets/images/erkang-bottom.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 2;
  position: relative;
  top: -40px;
  padding: 120px 70px 40px 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.border-area {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gift-image {
  display: block;
  width: 160px;
  height: 160px;
}
</style>