<template>
    <div class="spinner">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-cell title="default">
          <mt-spinner type="snake"></mt-spinner>
        </mt-cell>
        <mt-cell title="double-bounce">
          <mt-spinner type="double-bounce"></mt-spinner>
        </mt-cell>
        <mt-cell title="triple-bounce">
          <mt-spinner type="triple-bounce"></mt-spinner>
        </mt-cell>
        <mt-cell title="fading-circle">
          <mt-spinner type="fading-circle"></mt-spinner>
        </mt-cell>
        <p>接收传入类型的型号</p>
        <mt-cell title="default(0)">
          <mt-spinner :type="0"></mt-spinner>
        </mt-cell>
        <mt-cell title="double-bounce(1)">
          <mt-spinner :type="1"></mt-spinner>
        </mt-cell>
        <mt-cell title="triple-bounce(2)">
          <mt-spinner :type="2"></mt-spinner>
        </mt-cell>
        <mt-cell title="fading-circle(3)">
          <mt-spinner :type="3"></mt-spinner>
        </mt-cell>
        <p>颜色、大小</p>
        <mt-cell title="default">
          <mt-spinner color='#26a2ff' :type="0"></mt-spinner>
        </mt-cell>
        <mt-cell title="default">
          <mt-spinner :size="40" color='#26a2ff' :type="0"></mt-spinner>
        </mt-cell>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>

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
