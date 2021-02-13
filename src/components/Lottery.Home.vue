<template>
  <div class="lottery-home-component full-screen">
    <img class="cloud" src="../assets/images/cloud.png" alt="">
    <img src="../assets/images/bird.png" alt="" class="bird">
    <img src="../assets/images/star-1.png" alt="" class="star">
    <img src="../assets/images/star-2.png" alt="" class="star second">
    <img class="heart" src="../assets/images/love-heart.png" alt="">
    <div class="main">
      <h1 class="title">星选 Valentine</h1>
      <p>Hi Stella,</p>
      <p>这次的礼物，用抽奖的形式</p>
      <p>把“选择权”交给你</p>
    </div>
    <div class="footer">
      <span>©️本活动最终解释权归</span>
      <a href="https://kyrieliu.cn" target="_self"> kyrieliu </a>
      <span>所有</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LotteryHome',
  data() {
    return {}
  },
}
</script>

<style scoped>
.lottery-home-component {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 200px 0 0 0;
}
.cloud {
  position: absolute;
  top: -22px;
  right: 0;
}
.bird {
  position: absolute;
  left: 30px;
  top: 100px;
  width: 90px;
}
.heart {
  display: block;
  margin-top: 20px;
  width: 320px;
  height: 180px;
}
.star {
  position: absolute;
  top: 160px;
  right: 50px;
}
.star.second {
  top: 350px;
  right: auto;
  left: 50px;
}
.main {
  margin-top: 20px;
  padding: 0 20px;
}
.main > .title {
  margin-bottom: 10px;
}
.footer {
  color: #909399;
  position: absolute;
  text-align: center;
  bottom: 8px;
  width: 100%;
}
</style>