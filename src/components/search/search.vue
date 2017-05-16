<template>
    <div class="search">
      <div class="content">
        <!--<mt-search v-model="value"></mt-search>-->
        <!--<mt-search v-model="value1" cancel-text="取消" placeholder="搜索"></mt-search>-->
        <mt-search v-model="value" :result="filterResult"></mt-search>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>

</style>
<script>
    export default {
      data() {
        return {
          value: '',
          value1: '',
          result: [
            'Apple',
            'Banana',
            'Orange',
            'Durian',
            'Lemon',
            'Peach',
            'Cherry',
            'Berry',
            'Core',
            'Fig',
          ],
        };
      },

      computed: {
        filterResult() {
          return this.result.filter(value => new RegExp(this.value, 'i').test(value));
        },
      },
      methods: {},
    };
</script>
