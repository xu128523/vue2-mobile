<template>
    <div class="progress">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <p>默认</p>
        <mt-progress></mt-progress>
        <p>设置value</p>
        <mt-progress :value="33"></mt-progress>
        <p>左右文字</p>
        <mt-progress :value="11">
          <div slot="start">0</div>
          <div slot="end">100</div>
        </mt-progress>
        <p>定义线宽</p>
        <mt-progress :value="10" :bar-height="10"></mt-progress>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .progress{

    .content{
      background-color: #fff;

      p{
        line-height: 36px;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px dashed #e6e6e6;
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
