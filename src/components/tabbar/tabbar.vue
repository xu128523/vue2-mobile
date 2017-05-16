<template>
    <div class="tabbar">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <mt-cell title="搭配 tab-container 组件使用"></mt-cell>
      <div class="content">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="item1">
            <mt-cell v-for="n in 10" :key="n" title="微信"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="item2">
            <mt-cell v-for="n in 10" :key="n" title="通讯录"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="item3">
            <mt-cell v-for="n in 10" :key="n" title="发现"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="item4">
            <mt-cell v-for="n in 10" :key="n" title="我"></mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected">
          <mt-tab-item id="item1">
            <img slot="icon" src="../../assets/images/logo.png">
            微信
          </mt-tab-item>
          <mt-tab-item id="item2">
            <img slot="icon" src="../../assets/images/logo.png">
            通讯录
          </mt-tab-item>
          <mt-tab-item id="item3">
            <img slot="icon" src="../../assets/images/logo.png">
            发现
          </mt-tab-item>
          <mt-tab-item id="item4">
            <img slot="icon" src="../../assets/images/logo.png">
            我
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .tabbar{

    .content{
      margin-top: 20px;
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          selected: 'item1',
        };
      },
      methods: {},
    };
</script>
