<template>
    <div class="field">
      <mt-header title="Header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
        <mt-field label="生日" placeholder="选择生日" type="date"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>

        <div class="page-part">
          <mt-field placeholder="登录邮箱" type="email"></mt-field>
          <mt-field placeholder="密码" type="password"></mt-field>
        </div>
        <div class="page-part">
          <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
          <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
          <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
        </div>

        <div class="page-part">
          <mt-field label="验证码" placeholder="输入验证码">
            <img src="../../assets/images/logo.png" height="48px" width="100px">
          </mt-field>
        </div>
      </div>
    </div>
</template>
<style lang="scss" ref="stylesheet/scss">
  .field{

    .page-part{
      margin-top: 20px;
    }
    .mint-cell-value{
      flex: 2.4;
    }
  }
</style>
<script>
    export default {
      data() {
        return {
          username: '',
          email: '',
          password: '',
          phone: '',
          website: '',
          number: '',
          birthday: '',
          introduction: '',
          pickerVisible: false,
        };
      },
      computed: {},
      methods: {},
    };
</script>
