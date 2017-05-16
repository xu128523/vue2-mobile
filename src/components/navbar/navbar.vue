<template>
    <div class="navbar">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-navbar v-model="selected">
          <mt-tab-item id="item1">选项一</mt-tab-item>
          <mt-tab-item id="item2">选项二</mt-tab-item>
          <mt-tab-item id="item3">选项三</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="item1">
            <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="item2">
            <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="item3">
            <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>

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
