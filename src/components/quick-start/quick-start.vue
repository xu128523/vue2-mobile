<template>
    <div>
      <pre>
        完整引入

        在main.js里面写入一下内容

        import Vue from 'vue'
        import MintUI from 'mint-ui'
        import 'mint-ui/lib/style.css'
        import App from './App.vue'

        Vue.use(MintUI)

        new Vue({
          el: '#app',
          components: { App }
        })
      </pre>
      <pre>
        按需引入

        借助 babel-plugin-component，我们可以只引入
        需要的组件，以达到减小项目体积的目的。
        首先，安装 babel-plugin-component：
        npm install babel-plugin-component -D
        然后，将 .babelrc 修改为：
        {
          "presets": [
            ["es2015", { "modules": false }]
          ],
          "plugins": [["component", [
            {
              "libraryName": "mint-ui",
              "style": true
            }
          ]]]
        }
      </pre>
      <pre>
        如果你只希望引入部分组件，比如 Button 和 Cell，
        那么需要在 main.js 中写入以下内容：
        import Vue from 'vue'
        import { Button, Cell } from 'mint-ui'
        import App from './App.vue'

        Vue.component(Button.name, Button)
        Vue.component(Cell.name, Cell)
        /* 或写为
         * Vue.use(Button)
         * Vue.use(Cell)
         */

        new Vue({
          el: '#app',
          components: { App }
        })
      </pre>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss" scoped>
  pre{
    margin: 20px;
    background-color: #f6f8fa;
  }
</style>
<script>

</script>
