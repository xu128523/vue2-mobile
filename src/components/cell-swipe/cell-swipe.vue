<template>
    <div class="cell-swipe">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-cell-swipe v-for="n in 10"
                       :key="n"
                       :title="'swipe me ' + n"
                       :right="rightButtons">
        </mt-cell-swipe>
        <p>向左滑</p>
        <mt-cell-swipe v-for="n in 5"
                       :key="n"
                       :title="'swipe me ' + n"
                       :left="leftButtons">
        </mt-cell-swipe>

      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>

</style>
<script>
    export default {
      data() {
        return {};
      },
      created() {
        this.rightButtons = [
          {
            content: 'Delete',
            style: { background: '#ef4f4f', color: '#fff' },
            handler: () => this.$messagebox('Delete'),
          },
        ];
        this.leftButtons = [
          {
            content: 'Add',
            style: { background: '#0091e8', color: '#fff' },
            handler: () => this.$messagebox('Add'),
          },
        ];
      },
      methods: {},
    };
</script>
