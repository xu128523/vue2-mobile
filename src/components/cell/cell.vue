<template>
    <div class="cell">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-cell title="标题"></mt-cell>
        <mt-cell title="标题" value="说明文字"></mt-cell>
        <mt-cell title="标题icon" icon="more" value="带icon"></mt-cell>
        <mt-cell title="标题icon">
          <span>icon是图片</span>
          <img slot="icon" width="20" height="20" src="../../assets/images/logo.png">
        </mt-cell>
        <mt-cell title="标题" to="/" is-link value="带连接"></mt-cell>
        <mt-cell title="标题">
          <mt-button icon="back">按钮</mt-button>
        </mt-cell>
        <mt-cell title="标题" label="描述信息" is-link></mt-cell>
        <mt-cell title="标题" label="百度跳转" is-link to="//www.baidu.com"></mt-cell>
        <mt-cell title="标题" label="路由跳转/toast" is-link to="/home/toast"></mt-cell>
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
