<template>
    <div class="index-list">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-index-list>
          <mt-index-section index="A">
            <mt-cell title="Aaron"></mt-cell>
            <mt-cell title="Alden"></mt-cell>
            <mt-cell title="Austin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="Banana"></mt-cell>
            <mt-cell title="Between"></mt-cell>
            <mt-cell title="Braden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="Club"></mt-cell>
            <mt-cell title="Cluster"></mt-cell>
            <mt-cell title="Customer"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="Dependent"></mt-cell>
            <mt-cell title="Default"></mt-cell>
            <mt-cell title="Disable"></mt-cell>
          </mt-index-section>
          <mt-index-section index="z">
            <mt-cell title="Zack"></mt-cell>
            <mt-cell title="Zane"></mt-cell>
          </mt-index-section>
        </mt-index-list>
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
