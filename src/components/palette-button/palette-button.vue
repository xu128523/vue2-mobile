<template>
    <div class="palette-button">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-palette-button content="+">
          <div class="my-icon-button"></div>
          <div class="my-icon-button"></div>
          <div class="my-icon-button"></div>
        </mt-palette-button>
        <br>
        <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
                           direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
                           style="left:30px;">
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .palette-button{

    .content{

      .my-icon-button{}
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
        main_log(val) {
          this.$toast(`main_log${val}`);
        },
        sub_log(val) {
          this.$toast(`sub_log${val}`);
          this.$refs.target_1.collapse();
        },
      },
    };
</script>
