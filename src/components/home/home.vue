<template>
    <div class="home">
      <div class="page-title">Quick Start</div>
      <div class="quick-start">
        <mt-cell title="Quick Start" to="/home/quick-start" is-link></mt-cell>
      </div>
      <div class="page-title">JS Components</div>
      <div class="js-components">
        <mt-cell title="Toast" to="/home/toast" is-link><i slot="icon" class="fa fa-comment"></i></mt-cell>
        <mt-cell title="Indicator" to="/home/indicator" is-link><i slot="icon" class="fa fa-spinner"></i></mt-cell>
        <mt-cell title="Pull down" to="/home/pull-down" is-link><i slot="icon" class="fa fa-long-arrow-down"></i></mt-cell>
        <mt-cell title="Pull up" to="/home/pull-up" is-link><i slot="icon" class="fa fa-long-arrow-up"></i></mt-cell>
        <mt-cell title="Infinite Scroll" to="/home/infinite-scroll" is-link><i slot="icon" class="fa fa-jsfiddle"></i></mt-cell>
        <mt-cell title="Message box" to="/home/message-box" is-link><i slot="icon" class="fa fa-commenting-o"></i></mt-cell>
        <mt-cell title="Action sheet" to="/home/action-sheet" is-link><i slot="icon" class="fa fa-reorder"></i></mt-cell>
        <mt-cell title="Popup" to="/home/popup" is-link><i slot="icon" class="fa fa-twitch"></i></mt-cell>
        <mt-cell title="Swipe" to="/home/swipe" is-link><i slot="icon" class="fa fa-arrows-h"></i></mt-cell>
        <mt-cell title="Lazy load" to="/home/lazy-load" is-link><i slot="icon" class="fa fa-image"></i></mt-cell>
        <mt-cell title="Range" to="/home/range" is-link><i slot="icon" class="fa fa-hourglass-end"></i></mt-cell>
        <mt-cell title="Progress" to="/home/progress" is-link><i slot="icon" class="fa fa-minus"></i></mt-cell>
        <mt-cell title="Picker" to="/home/picker" is-link><i slot="icon" class="fa fa-cc"></i></mt-cell>
        <mt-cell title="Datetime Picker" to="/home/datetime-picker" is-link><i slot="icon" class="fa fa-calendar"></i></mt-cell>
        <mt-cell title="Index List" to="/home/index-list" is-link><i slot="icon" class="fa fa-sort-alpha-asc"></i></mt-cell>
        <mt-cell title="Palette Button(???)" to="/home/palette-button" is-link><i slot="icon" class="fa fa-sort-alpha-asc"></i></mt-cell>
      </div>
      <div class="page-title">CSS Components</div>
      <div class="css-components">
        <mt-cell title="Header" to="/home/header" is-link><i slot="icon" class="fa fa-header"></i></mt-cell>
        <mt-cell title="Tabbar" to="/home/tabbar" is-link><i slot="icon" class="fa fa-ellipsis-h"></i></mt-cell>
        <mt-cell title="Navbar" to="/home/navbar" is-link><i slot="icon" class="fa fa-server"></i></mt-cell>
        <mt-cell title="Button" to="/home/button" is-link><i slot="icon" class="fa fa-square-o"></i></mt-cell>
        <mt-cell title="Cell" to="/home/cell" is-link><i slot="icon" class="fa fa-bars"></i></mt-cell>
        <mt-cell title="Cell Swipe" to="/home/cell-swipe" is-link><i slot="icon" class="fa fa-bars"></i></mt-cell>
        <mt-cell title="Spinner" to="/home/spinner" is-link><i slot="icon" class="fa fa-spinner"></i></mt-cell>
        <mt-cell title="TabContainer" to="/home/tab-container" is-link><i slot="icon" class="fa fa-th"></i></mt-cell>
        <mt-cell title="Search" to="/home/search" is-link><i slot="icon" class="fa fa-search"></i></mt-cell>
      </div>
      <div class="page-title">From Components</div>
      <div class="from-components">
        <mt-cell title="Switch" to="/home/switch" is-link><i slot="icon" class="fa fa-toggle-on"></i></mt-cell>
        <mt-cell title="Checklist" to="/home/check-list" is-link><i slot="icon" class="fa fa-list-ul"></i></mt-cell>
        <mt-cell title="Radio" to="/home/radio" is-link><i slot="icon" class="fa fa-dot-circle-o"></i></mt-cell>
        <mt-cell title="Field" to="/home/Field" is-link><i slot="icon" class="fa fa-th-large"></i></mt-cell>
        <mt-cell title="Badge" to="/home/badge" is-link><i slot="icon" class="fa fa-square"></i></mt-cell>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .home{

    .page-title{
      margin: 20px auto;
      display: block;
      line-height: 1;
      font-size: 20px;
      text-align: center;
    }

    .js-components{
      margin-top: 20px;
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
      methods: {},
    };
</script>
