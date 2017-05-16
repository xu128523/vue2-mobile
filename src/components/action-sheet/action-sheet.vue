<template>
    <div class="action-sheet">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-button type="default" size="large" @click="handleClick">action sheet</mt-button>
        <mt-button type="default" size="large" @click="handleClick1">不带取消按钮</mt-button>
      </div>
      <div class="actions">
        <mt-actionsheet :actions="actions" v-model="visible"></mt-actionsheet>
        <mt-actionsheet :actions="actions2" cancelText="" v-model="visible2"></mt-actionsheet>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .action-sheet{

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
        const camera = () => {
          this.$toast('你点击了拍照');
        };
        const album = () => {
          this.$toast('你点击了相册');
        };
        const sure = () => {
          this.$toast('你点击了确定');
        };
        const goback = () => {
          this.$toast('你点击了返回上一步');
        };
        return {
          visible: false,
          visible2: false,
          actions: [
            {
              name: '拍照',
              method: camera,
            },
            {
              name: '相册',
              method: album,
            },
          ],
          actions2: [
            {
              name: '确定',
              method: sure,
            },
            {
              name: '返回上一步',
              method: goback,
            },
          ],
        };
      },
      methods: {
        handleClick() {
          this.visible = true;
        },
        handleClick1() {
          this.visible2 = true;
        },
      },
    };
</script>
