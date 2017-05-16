<template>
    <div class="check-list">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-checklist title="复选框" v-model="value" :options="options"></mt-checklist>
        <div>选中值：{{value}}</div>
        <mt-checklist v-model="value1" :options="options1"></mt-checklist>
        <div>选中值：{{value1}}</div>
        <div style="margin-top: 20px;">最多选两个</div>
        <mt-checklist :max="2" v-model="value2" :options="options"></mt-checklist>
        <div style="margin-top: 20px;">右对齐</div>
        <mt-checklist align="right" v-model="value2" :options="options"></mt-checklist>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>

</style>
<script>
    export default {
      data() {
        return {
          value: [],
          value1: [],
          value2: [],
          options: ['A', 'B', 'C', 'D'],
          options1: [
            {
              label: 'A',
              value: 'A',
              disabled: true,
            },
            {
              label: 'B',
              value: 'B',
              disabled: false,
            },
            {
              label: 'C',
              value: 'C',
              disabled: false,
            },
            {
              label: 'D',
              value: 'D',
              disabled: false,
            },
          ],
        };
      },
      created() {},
      methods: {},
    };
</script>
