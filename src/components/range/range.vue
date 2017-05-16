<template>
    <div class="range">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <p>基本功能</p>
        <div class="box">
          <mt-cell title="默认" :label="'value：' + rangeValue">
            <mt-range v-model="rangeValue"></mt-range>
          </mt-cell>
          <mt-cell title="预设" :label="'value：' + rangeValue1">
            <mt-range v-model="rangeValue1"></mt-range>
          </mt-cell>
          <mt-cell title="左右文字" :label="'value：' + rangeValue2">
            <mt-range v-model="rangeValue2">
              <div slot="start">0</div>
              <div slot="end">100</div>
            </mt-range>
          </mt-cell>
        </div>
        <p>自定义</p>
        <div class="box">
          <mt-cell title="定义步长" :label="'value：' + rangeValue3">
            <mt-range v-model="rangeValue3"
              :step="10">
            </mt-range>
          </mt-cell>
          <mt-cell title="定义区间" :label="'value：' + rangeValue4">
            <mt-range v-model="rangeValue4"
              :min="10"
              :max="90">
              <div slot="start">10</div>
              <div slot="end">90</div>
            </mt-range>
          </mt-cell>
          <mt-cell title="定义线宽" :label="'value：' + rangeValue5">
            <mt-range v-model="rangeValue5" :bar-height="10"></mt-range>
          </mt-cell>
          <mt-cell title="置为无效" :label="'value：' + rangeValue6">
            <mt-range v-model="rangeValue6" :disabled="true">
              <div slot="start">0</div>
              <div slot="end">100</div>
            </mt-range>
          </mt-cell>
        </div>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss">
  .range{

    .content{

      p{line-height: 36px;font-size: 14px;}

      .mint-cell-value{
        -webkit-box-flex: 2.5;
        -ms-flex: 2.5;
        flex: 2.5;
        position: relative;

        .mt-range{
          width: 100%;
        }
      }
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          rangeValue: 0,
          rangeValue1: 20,
          rangeValue2: 0,
          rangeValue3: 0,
          rangeValue4: 0,
          rangeValue5: 0,
          rangeValue6: 44,
        };
      },
      methods: {},
    };
</script>
