<template>
    <div class="infinite-scroll">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <ul v-infinite-scroll="handleLoadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
          <li v-for="item in list">{{item.message}}</li>
        </ul>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .infinite-scroll{
    background-color: #fff;

    ul>li{
      line-height: 50px;
      border-bottom: 1px solid #e6e6e6;
      text-align: center;
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          loading: false,
          list: [
            { message: 1 },
            { message: 2 },
            { message: 3 },
            { message: 4 },
            { message: 5 },
            { message: 6 },
            { message: 7 },
            { message: 8 },
            { message: 9 },
            { message: 10 },
            { message: 11 },
            { message: 12 },
            { message: 13 },
            { message: 14 },
            { message: 15 },
          ],
        };
      },
      methods: {
        handleLoadMore() {
          const self = this;
          if (this.list.length > 40) {
            this.loading = true;
            return;
          }

          setTimeout(() => {
            const last = this.list.length;

            for (let i = 1; i <= 10; i += 1) {
              self.list.push({
                message: last + i,
              });
            }
          }, 2000);
        },
      },
    };
</script>
