<template>
    <div class="message-box">
      <mt-header title="Header">
        <router-link to="/" solt="返回"></router-link>
      </mt-header>
      <div class="content">
        <mt-button type="default" size="large" @click="handleClick">messageBox</mt-button>
        <mt-button type="default" size="large" @click="handleClick1">alert</mt-button>
        <mt-button type="default" size="large" @click="handleClick2">confirm</mt-button>
        <mt-button type="default" size="large" @click="handleClick3">prompt</mt-button>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .message-box{

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
        handleClick() {
          this.$messagebox('提示', '操作成功');
        },
        handleClick1() {
          this.$messagebox.alert('操作成功').then(() => {
            this.$toast('你点击了确定');
          });
        },
        handleClick2() {
          this.$messagebox.confirm('确定执行此操作？').then(() => {
            this.$toast('你点击了确定');
          }, () => {
            this.$toast('你点击了取消');
          });
        },
        handleClick3() {
          this.$messagebox.prompt('请输入你的电话').then(({ value }) => {
            this.$toast({
              message: `电话为${value}`,
              duration: 1000,
            });

            setTimeout(() => {
              this.$toast('你点击了确定');
            }, 2000);
          }, () => {
            this.$toast('你点击了取消');
          });
        },
      },
    };
</script>
