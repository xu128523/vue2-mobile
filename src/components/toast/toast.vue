<template>
    <div class="toast">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-button type="default" size="large" @click="handleToast">Toast</mt-button>
        <mt-button type="default" size="large" @click="handleIconToast">Icon Toast</mt-button>
        <mt-button type="default" size="large" @click="handlePosToast">Toast</mt-button>
        <p>属性中iconClass可为其添加样式，但是图片样式需要自备</p>
      </div>
      <pre>
        部分引入组件
        import { Toast } form 'mint-ui'
        Toast('提示信息')
      </pre>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .toast{
    .content{
      margin: 20px auto;
      padding: 0 20px;
      text-align: center;

      button{
        margin-top: 20px;
      }
    }

    p{
      margin: 10px 0;
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
        handleToast() {
          this.$toast('这个是提示信息');
        },
        handleIconToast() {
          this.$toast({
            message: '操作成功',
            iconClass: 'fa fa-check',
          });
        },
        handlePosToast() {
          this.$toast({
            message: '操作成功',
            position: 'bottom',
            duration: 5000,
          });
        },
      },
    };
</script>
