<template>
    <div class="swipe">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <p>基础用法</p>
      <mt-swipe>
        <mt-swipe-item class="slider1">1</mt-swipe-item>
        <mt-swipe-item class="slider2">2</mt-swipe-item>
        <mt-swipe-item class="slider3">3</mt-swipe-item>
      </mt-swipe>
      <p>取消indicators</p>
      <mt-swipe :show-indicators="false">
        <mt-swipe-item class="slider1">1</mt-swipe-item>
        <mt-swipe-item class="slider2">2</mt-swipe-item>
        <mt-swipe-item class="slider3">3</mt-swipe-item>
      </mt-swipe>
      <p>取消自动播放</p>
      <mt-swipe :auto="0">
        <mt-swipe-item class="slider1">1</mt-swipe-item>
        <mt-swipe-item class="slider2">2</mt-swipe-item>
        <mt-swipe-item class="slider3">3</mt-swipe-item>
      </mt-swipe>
      <p>设置默认页</p>
      <mt-swipe :default-index="1">
        <mt-swipe-item class="slider1">1</mt-swipe-item>
        <mt-swipe-item class="slider2">2</mt-swipe-item>
        <mt-swipe-item class="slider3">3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .swipe{

    p{
      line-height: 36px;
      text-align: center;
    }

    .mint-swipe{
      height: 200px;

      .slider1{
        background-color: #008ee5;
        font-size: 22px;
        text-align: center;
        line-height: 200px;
        color: #fff;
      }
      .slider2{
        background-color: #fb7e00;
        font-size: 22px;
        text-align: center;
        line-height: 200px;
        color: #fff;
      }
      .slider3{
        background-color: #f52f3e;
        font-size: 22px;
        text-align: center;
        line-height: 200px;
        color: #fff;
      }
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          data: '',
        };
      },
      methods: {},
    };
</script>
