<template>
    <div class="datetime-picker">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-button type="default" size="large" @click="handleClick1">Time Picker</mt-button>
        <span>Time Picker value：{{pickerValue1}}</span>
        <mt-button type="default" size="large" @click="handleClick2">DateTime Picker</mt-button>
        <span>DateTime Picker value：{{pickerValue2}}</span>
        <mt-button type="default" size="large" @click="handleClick3">Date Picker</mt-button>
        <span>Date Picker value：{{pickerValue3}}</span>
        <mt-button type="default" size="large" @click="handleClick4">自定义模板</mt-button>
        <mt-button type="default" size="large" @click="handleClick5">初始值</mt-button>
        <mt-datetime-picker ref="picker"
          type="time"
          v-model="pickerValue1">
        </mt-datetime-picker>
        <mt-datetime-picker ref="picker2"
          type="datetime"
          v-model="pickerValue2">
        </mt-datetime-picker>
        <mt-datetime-picker ref="picker3"
          type="date"
          v-model="pickerValue3">
        </mt-datetime-picker>
        <mt-datetime-picker ref="picker4"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          v-model="pickerValue4">
        </mt-datetime-picker>
        <mt-datetime-picker ref="picker5"
          type="date"
          @confirm="handleDateChange"
          v-model="pickerValue5">
        </mt-datetime-picker>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .datetime-picker{

    .content{
      padding: 0 20px;

      button{margin-top: 10px;}
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          pickerValue1: '',
          pickerValue2: '',
          pickerValue3: '',
          pickerValue4: '',
          pickerValue5: '2017-05-12',
        };
      },
      methods: {
        handleClick1() {
          this.$refs.picker.open();
        },
        handleClick2() {
          this.$refs.picker2.open();
        },
        handleClick3() {
          this.$refs.picker3.open();
        },
        handleClick4() {
          this.$refs.picker4.open();
        },
        handleClick5() {
          this.$refs.picker5.open();
        },
        handleDateChange(value) {
          this.$toast(`你点击的时间为：${value}`);
        },
      },
    };
</script>
