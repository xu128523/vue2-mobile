<template>
    <div class="switch">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-switch v-model="data"></mt-switch>
        <p>显示文字</p>
        <mt-switch v-model="data1" :value="data1">开关</mt-switch>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .switch{

    .content{
      padding: 20px;
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          data: false,
          data1: true,
        };
      },
      methods: {},
    };
</script>
