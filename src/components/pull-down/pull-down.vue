<template>
  <div class="pull-down">
    <mt-header title="Header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="item in list">{{item.message}}</li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  .pull-down{
    background-color: #fff;

    ul>li{
      line-height: 36px;
      border-bottom: 1px solid #e6e6e6;
      text-align: center;
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        allLoaded: false,
        list: [
          {
            id: 1001,
            message: 'list 1',
          },
          {
            id: 1002,
            message: 'list 2',
          },
          {
            id: 1003,
            message: 'list 3',
          },
          {
            id: 1004,
            message: 'list 4',
          },
          {
            id: 1005,
            message: 'list 5',
          },
          {
            id: 1006,
            message: 'list 6',
          },
          {
            id: 1007,
            message: 'list 7',
          },
          {
            id: 1008,
            message: 'list 8',
          },
          {
            id: 1009,
            message: 'list 9',
          },
          {
            id: 1010,
            message: 'list 10',
          },
        ],
      };
    },
    methods: {
      loadTop() {
        const self = this;
        const length = this.list.length;

        for (let i = length; i < length + 10; i += 1) {
          const messages = `new message-down${i}`;
          self.list.unshift({
            id: i,
            message: messages,
          });
        }

        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        const self = this;
        const length = this.list.length;

        for (let i = length; i < length + 10; i += 1) {
          const messages = `new message-up${i}`;
          self.list.push({
            id: i,
            message: messages,
          });
        }

        if (length > 60) {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      },
    },
  };
</script>
