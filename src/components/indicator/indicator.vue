<template>
    <div class="indicator">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-button type="default" size="large" @click="handleClick1">indicator</mt-button>
        <mt-button type="default" size="large" @click="handleClick2">带文字indicator</mt-button>
        <mt-button type="default" size="large" @click="handleType('snake')">可配置indicator(default)</mt-button>
        <mt-button type="default" size="large" @click="handleType('fading-circle')">可配置indicator(fading-circle)</mt-button>
        <mt-button type="default" size="large" @click="handleType('double-bounce')">可配置indicator(double-bounce)</mt-button>
        <mt-button type="default" size="large" @click="handleType('triple-bounce')">可配置indicator(triple-bounce)</mt-button>
      </div>
      <pre>
        部分引入组件
        import { Indicator } form 'mint-ui'
        Indicator.open('提示信息')
      </pre>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .indicator{

    .content{
      padding: 0 20px;

      button{
        margin-top: 20px;
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
      methods: {
        handleClick1() {
          this.$indicator.open();
          setTimeout(() => {
            this.$indicator.close();
          }, 1500);
        },
        handleClick2() {
          this.$indicator.open('加载中...');
          setTimeout(() => {
            this.$indicator.close();
          }, 1500);
        },
        handleType(type) {
          this.$indicator.open({
            text: '加载中...',
            spinnerType: type,
          });
          setTimeout(() => {
            this.$indicator.close();
          }, 1500);
        },
      },
    };
</script>
