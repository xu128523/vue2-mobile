<template>
  <div class="action-sheet">
    <mt-header title="Header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-button type="default" size="large" @click="handleClick1">中部弹出popup</mt-button>
      <mt-button type="default" size="large" @click="handleClick2">上册弹出popup</mt-button>
      <mt-button type="default" size="large" @click="handleClick3">右侧弹出popup</mt-button>
      <mt-button type="default" size="large" @click="handleClick4">下册弹出popup</mt-button>
    </div>
    <mt-popup v-model="visible1"
      popup-transition="popup-fade"
      class="mint-popup-1">
        <h1>popup</h1>
        <p>这里是插入内容显示</p>
        <p>内容为自定义</p>
    </mt-popup>
    <mt-popup v-model="visible2"
      position="top"
      :modal="isModal"
      class="mint-popup-2">
        <p>更新成功</p>
    </mt-popup>
    <mt-popup v-model="visible3"
      position="right"
      :modal="isModal"
      class="mint-popup-3 fadeInRight">
        <mt-button type="primary" @click="handleClick5">关闭Popup</mt-button>
    </mt-popup>
    <mt-popup v-model="visible4"
      position="bottom"
      class="mint-popup-4">
      <p>更新成功</p>
    </mt-popup>
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
    .mint-popup-1 {
      width: 200px;
      border-radius: 8px;
      padding: 10px;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);

      /*&:before {*/
        /*display: inline-block;*/
        /*width: 0;*/
        /*height: 0;*/
        /*border: solid transparent;*/
        /*border-width: 10px;*/
        /*border-bottom-color: #fff;*/
        /*content: "";*/
        /*position: absolute;*/
        /*top: -20px;*/
        /*right: 50px;*/
      /*}*/
    }
    .mint-popup-2, .mint-popup-4 {
      width: 100%;
      height: 50px;
      text-align: center;
      background-color: rgba(0,0,0,.7);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      p{line-height: 50px;color: #fff;}
    }

    .mint-popup-3 {
      width: 100%;
      height: 100%;
      background-color: #fff;

      button{
        margin: 50px auto;
        display: block;
      }
    }

    @-webkit-keyframes fadeOutDown {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }

    @keyframes fadeOutDown {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }

    .fadeOutDown {
      -webkit-animation-name: fadeOutDown;
      animation-name: fadeOutDown;
    }

    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    .fadeInRight {
      -webkit-animation-name: fadeInRight;
      animation-name: fadeInRight;
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: '2017-05-14',
        isModal: false,
      };
    },
    methods: {
      handleClick1() {
        this.visible1 = true;
      },
      handleClick2() {
        this.visible2 = true;
      },
      handleClick3() {
        this.visible3 = true;
      },
      handleClick4() {
        this.visible4 = true;
      },
      handleClick5() {
        this.visible3 = false;
      },
    },
  };
</script>
