<template>
    <section class="login_contain">
      <div class="login_inner">
        <section class="login_header">
           <h2 class="login_h2">硅谷外卖</h2>
           <div class="login_way">
              <a class="login_way_msg" @click="isShowChange" :class="{on:isShow}">短信登录</a>
              <a class="login_way_pass" @click="isShowChange" :class="{on:!isShow}">密码登录</a>
           </div>
        </section>
        <section class="login_body">
          <form>
            <div class="login_message" :class="{show:!isShow}">
              <section class="login_sec_number">
                <input class="input_num" type="tel" maxlength="11" placeholder="手机号"/>
                 <button class="btn_yanzhenma">获取验证码</button>
              </section>
              <section class="login_sec_number">
                  <input class="input_num" type="tel" placeholder="验证码"/>
              </section>
              <section class="login_xieyi">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a>《用户协议》</a>
              </section>
            </div>
            <div class="login_password" :class="{show:isShow}">
              <section class="login_sec_number">
                <input class="input_num" type="tel" maxlength="11" placeholder="手机号/邮箱/用户名"/>
              </section>
              <section class="login_sec_number">
                <input class="input_num" type="tel" placeholder="密码"/>
                <button class="btn_yanzhenma">获取验证码</button>
              </section>
              <section class="login_sec_number">
                <input class="input_num" type="tel" placeholder="验证码"/>
                <img class="btn_yanzhenma" src="./images/captcha.svg" alt="captcha">
              </section>
            </div>
            <button class="btn_login">登录</button>
          </form>
           <a href="javascript:" class="login_about">
             关于我们
           </a>
        </section>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    isShowChange () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .show{
    display none;
  }
  .login_contain{
    display flex
    width 100%
    height 100%
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background white
  }
  .login_inner{
    padding-top 60px
    margin 0 auto
    text-align center
    width 80%
    height 100%
  }
  .login_h2{
    font-size 40px
    margin 0;
    color #31a51f
    font-weight: bold;
  }
  .login_way{
    padding-top 40px;
    font-size 14px
  }
  .login_way_msg{
    margin-right 40px
    padding-bottom 4px
  }
  a.on{
    font-weight 700

    color #31a51f
    border-bottom 2px solid #31a51f
  }
  .login_sec_number{
    margin-top 16px
    height: 48px;
    font-size: 14px;
    background: #fff;
    position: relative;
    box-sizing: border-box ;
  }
  .input_num{
    font-size 14px;
    border: 1px solid #ddd;
    width 100%
    height 100%
    border-radius 5px
    text-indent: 10px
  }

  .btn_yanzhenma{
    position  absolute
    top 50%
    right 10px
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent;
    transform: translateY(-50%);
  }
  .login_xieyi{
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
  }
  .btn_login{
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0;
  }
  .login_about{
    display: block;
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
    color: #999;
  }
  .login_xieyi >a {
    color: #a4ff3f
  }
</style>
