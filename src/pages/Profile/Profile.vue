<template>
  <div class="profileContainer">
    <header class="Header">
      <div class="HeaderLeft">
        <i class="home" @click="$router.push('/msite')"></i>
      </div>
      <div class="HeaderTitle">
        <i class="logo"></i>
      </div>
      <div class="HeaderRight">
        <i class="search"></i>
        <i class="cart" @click="$router.push('/shopcart')"></i>
      </div>
    </header>
    <div class="Lprofile">
      <div class="loginContainer">
        <div class="plogo">
          <img src="./images/header/bg.png" alt="bg">
        </div>
        <div class="loginWay">
          <ul class="loginStyle">
            <li class="loginItem" :class="{active: loginWay}" @click="loginWay = true">
              <span>普通登录</span>
              <i></i>
            </li>
            <li class="loginItem" :class="{active: !loginWay}" @click="loginWay = false">
              <span>手机动态密码登录</span>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="loginForm">
        <form>
          <div class="userLogin" :class="{active: loginWay}">
            <div class="inpCon">
              <input type="text" placeholder="手机号/邮箱/用户名" v-model="userName">
            </div>
            <div class="inpCon">
              <input type="password" placeholder="输入密码" v-model="password">
            </div>
          </div>
          <div class="poneLogin" :class="{active: !loginWay}">
            <div class="inpCon">
              <input type="text" placeholder="已注册的手机号" v-model="phone">
            </div>
            <div class="inpCon">
              <input type="text" placeholder="请输入图片内容" v-model="captcha">
              <img class="get_verification" src="./images/captcha.svg" alt="captcha">
            </div>
            <div class="inpCon">
              <input type="text" placeholder="动态密码" v-model="message">
              <button disabled="disabled" class="get_password" >获取动态密码</button>
            </div>
          </div>
        </form>
      </div>
      <div class="submit">
        <div class="loginBtn" @click="login">登录</div>
      </div>
      <div class="newUser">
        <div class="newUserLeft">新用户注册</div>
        <div class="newUserRight">忘记密码？</div>
      </div>
    </div>
    <footer class="others">
      <div class="oth">
        <i></i>
        <span>微信</span>
      </div>
      <div class="oth">
        <i class="QQ"></i>
            <span>QQ</span>
      </div>
      <div class="oth">
        <i class="weibo"></i>
        <span>微博</span>
      </div>
    </footer>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </div>
</template>
<script>
  // import {MessageBox} from 'mint-ui'
  import AlertTip from '../../components/AlertTip/AlertTip'
  export default {
    data () {
      return {
        loginWay: true, // true为普通登录， false为手机登录
        userName: '', // 普通登录用户名
        password: '', // 普通登录密码
        phone: '', // 手机登录用手机号
        captcha: '', // 手机登录用图片验证码
        message: '', // 手机登录用动态密码
        alertText: '', // 提示文本
        alertShow: false // 是否显示警示框，默认不显示
      }
    },
    computed: {
      rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      showAlert (alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      login () {
        if (!this.loginWay) {
          const {rightPhone, captcha, message} = this
          if (!rightPhone) {
            // 请输入有效的号码
            this.showAlert('请输入有效的号码')
            return
          } else if (!captcha) {
            this.showAlert('请输入图片验证码')
            return
          } else if (!/^\d{6}$/.test(message)) {
            // 验证码必须是6位数字
            this.showAlert('验证码必须是6位数字')
            return
          }
          this.$router.replace('/msite')
        } else {
          const {userName, password} = this
          if (!userName) {
            // 请输入用户名
            this.showAlert('请输入用户名')
            return
          } else if (!password) {
            // 请输入密码
            this.showAlert('请输入密码')
            return
          }
          this.$router.replace('/msite')
        }
      }
    },
    components: {
      AlertTip
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profileContainer
    height 100%
    background #fff
    overflow hidden
  .Header
    width 10rem
    height (87/$rem)
    background #fff
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-between
    box-sizing border-box
    padding 0 (16/$rem) 0 (24/$rem)
    position fixed
    top 0
    left 0
    z-index 3
    &>div
      font-size 0
    .HeaderLeft
      .home
        display inline-block
        width (48/$rem)
        height (44/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-74/$rem)
    .HeaderTitle
      width (172/$rem)
      height (54/$rem)
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      margin auto
      .logo
        display inline-block
        width (172/$rem)
        height (54/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-128/$rem)
    .HeaderRight
      .search
        display inline-block
        width (64/$rem)
        height (64/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-334/$rem)
        margin-right (20/$rem)
      .cart
        display inline-block
        width (64/$rem)
        height (64/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 0
  .Lprofile
    padding 0 (40/$rem)
    background #fff
    .loginContainer
      margin-top (87/$rem)
      .plogo
        padding (80/$rem) 0
        text-align center
        & > img
          width (268/$rem)
          height (90/$rem)
      .loginWay
        height (80/$rem)
        background rgb(180, 40, 45)
        border-radius (10/$rem)
        .loginStyle
          clearFix()
          height 100%
          display flex
          flex-flow row nowrap
          justify-content space-around
          .loginItem
            text-align center
            height 100%
            width 50%
            line-height (80/$rem)
            color #fff
            font-size (36/$rem)
            position relative
            &.active
              &>i
                display block
                content ''
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                width 0
                height 0
                position absolute
                bottom 0
                left 50%
                transform translateX(-50%)
    .loginForm
      font-size (28/$rem)
      box-sizing border-box
      padding 0 (20/$rem) (20/$rem) (20/$rem)
      background #fff
      & > form
        & > div
          display none
          &.active
            display block
            .inpCon
              padding (40/$rem)
              width 100%
              height (40/$rem)
              border-bottom 3px solid #d9d9d9
              position relative
              & > input
                display block
                width 100%
                border none
                outline none
              .get_verification,.get_password
                position absolute
                width (200/$rem)
                height (80/$rem)
                right (80/$rem)
                bottom (20/$rem)
                font-size (24/$rem)
    .submit
      background #fff
      text-align center
      .loginBtn
        display inline-block
        width 100%
        height (80/$rem)
        background rgb(180, 40, 45)
        font-size (36/$rem)
        border-radius (10/$rem)
        color #fff
        line-height (80/$rem)
    .newUser
      background #fff
      padding (20/$rem) 0
      font-size (24/$rem)
      color #999
      display flex
      align-items center
      justify-content space-between
  .others
    width 10rem
    padding-left (90/$rem)
    margin-top (120/$rem)
    /*display flex*/
    .oth
      float left
      box-sizing border-box
      padding 0 (40/$rem)
      width (180/$rem)
      font-size (24/$rem)
      color #999
      &:nth-child(2)
        border-right 2px solid #999
        border-left 2px solid #999
      & > i
        display inline-block
        width (40/$rem)
        height (40/$rem)
        vertical-align middle
        background-image url("./images/footer/wechat.png")
        &.QQ
          background-image url("./images/footer/QQ.png")
        &.weibo
          background-image url("./images/footer/weibo.png")
</style>
