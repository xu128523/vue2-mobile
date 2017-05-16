<template>
    <div class="eslint">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-button type="default" @click="handleClick" size="large">default</mt-button>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .eslint{

    .content{
      padding: 20px;
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
          this.$toast('test');
        },
      },
    };
</script>
