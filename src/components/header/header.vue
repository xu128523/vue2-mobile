<template>
    <div class="header">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-header title="多个按钮">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button @click="handleClose" slot="left">关闭</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-header title="右侧文字">
        <mt-button @click="handleClose" slot="left">关闭</mt-button>
        <mt-button slot="right">设置</mt-button>
      </mt-header>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .header{

    .mint-header{
      margin-bottom: 10px;
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
      methods: {
        handleClose() {
          this.$toast('点击了关闭');
        },
      },
    };
</script>
