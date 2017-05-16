<template>
    <div class="button">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="box">
          <mt-button type="default">default</mt-button>
          <mt-button type="primary">primary</mt-button>
          <mt-button type="danger">danger</mt-button>
        </div>
        <div class="box">
          <mt-button size="large" type="default">default</mt-button>
          <mt-button size="large" type="primary">primary</mt-button>
          <mt-button size="large" type="danger">danger</mt-button>
        </div>
        <div class="box">
          <mt-button size="small" type="default">default</mt-button>
          <mt-button size="small" type="primary">primary</mt-button>
          <mt-button size="small" type="danger">danger</mt-button>
        </div>
        <div class="box">
          <mt-button plain>plain</mt-button>
          <mt-button size="large" type="default" plain>plain</mt-button>
          <mt-button size="large" type="primary" plain>plain</mt-button>
          <mt-button size="large" type="danger" plain>plain</mt-button>
        </div>
        <div class="box">
          <mt-button icon="back">back</mt-button>
          <mt-button icon="more">更多</mt-button>
          <mt-button>
            <img src="../../assets/images/logo.png" height="20" width="20" slot="icon">
            带自定义图标
          </mt-button>
        </div>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .button{

    .content{
      padding: 20px;

      .box{
        margin-top: 20px;

        button{margin-bottom: 10px;}
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
