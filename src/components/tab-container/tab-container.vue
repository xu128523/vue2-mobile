<template>
  <div class="tab-container">
    <mt-header title="Header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-button @click="handleActive('item1')">tab 1</mt-button>
      <mt-button @click="handleActive('item2')">tab 2</mt-button>
      <mt-button @click="handleActive('item3')">tab 3</mt-button>

      <mt-tab-container v-model="selected" swipeable>
        <mt-tab-container-item id="item1">
          <mt-cell v-for="n in 10" :key="n" title="tab container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="item2">
          <mt-cell v-for="n in 7" :key="n" title="tab container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="item3">
          <mt-cell v-for="n in 4" :key="n" title="tab container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .tab-container{

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
    methods: {
      handleActive(type) {
        this.selected = type;
      },
    },
  };
</script>
