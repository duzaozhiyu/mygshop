<template>
  <div>
    <section class="profile">
      <!--<header class="header">-->
        <!--<a class="header_title">-->
          <!--<span class="header_title_text">我的</span>-->
        <!--</a>-->
      <!--</header>-->
      <HeaderTop title="我的"></HeaderTop>
      <section class="profile_login">
        <router-link class="profile_link" to="/login">
          <div class="profile_touxiang">
             <span>
               <i class="iconfont icon-touxiang1"></i>
             </span>
          </div>
          <div class="profile_log_act">
            <p>
              <span>登录/注册</span>
            </p>
            <p>
                <span>
                  <i class="shouji iconfont icon-shouji"></i>
                </span>
              <span>暂无绑定手机号</span>
            </p>
          </div>
          <span class="span_right">
              <i class="iconfont icon-icon_arrow_right"></i>
           </span>
        </router-link>
        <!--<a class="profile_link" href="javascrpit:">-->
           <!---->
        <!--</a>-->
      </section>
      <section class="profile_list">
          <ul>
            <li>
              <a>
                <span class="money_num_parent"><span class="money_num span_yuan">0.00</span>元</span>
                <span class="ul_a_span">我的余额</span>
              </a>
            </li>
            <li>
              <a>
                <span class="money_num_parent"><span class="money_num span_ge">0</span>个</span>
                <span class="ul_a_span">我的优惠</span>
              </a>
            </li>
            <li>
              <a>
                <span class="money_num_parent"><span class="money_num span_fen">0</span>分</span>
                <span class="ul_a_span">我的积分</span>
              </a>
            </li>
          </ul>
      </section>
      <section class="profile_server">
        <a>
          <span>
            <i class="iconfont icon-bianji"></i>
          </span>
          <div class="server_item">
            <span>我的订单</span>
            <span>
              <i class="iconfont icon-icon_arrow_right"></i>
            </span>
          </div>
        </a>
        <a>
          <span>
            <i class="iconfont icon-icon-test"></i>
          </span>
          <div class="server_item">
            <span>积分商城</span>
            <span>
              <i class="iconfont icon-icon_arrow_right"></i>
            </span>
          </div>
        </a>
        <a>
          <span>
            <i class="iconfont icon-huiyuan"></i>
          </span>
          <div class="server_item">
            <span>外卖会员卡</span>
            <span class="way_right">
              <i class="iconfont icon-icon_arrow_right"></i>
            </span>
          </div>
        </a>
      </section>
      <section class="profile_server">
        <a>
          <span>
            <i class="iconfont icon-caiyouduo_hemaixiangqing-dianzhuchupiao"></i>
          </span>
          <div class="server_item">
            <span>服务中心</span>
            <span>
              <i class="iconfont icon-icon_arrow_right"></i>
            </span>
          </div>
        </a>
      </section>
    </section>
  </div>
</template>

<script>

import HeaderTop from '../../components/HeaderTop/HeaderTop'

export default {
  name: 'Profile',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header //头部公共css
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 30%
    color #fff
    font-size 22px
    text-align center
  .profile_login
    margin-top 45.5px
    background-color #02a774
    width 100%
    .profile_log_act{
      position  relative
      display inline-block
      color white
      margin-left 15px

    }
    .profile_log_act p{
      padding-bottom 10px
    }
    .icon-touxiang1
     font-size 60px
     color #a39d8c

  .profile_list{
    position relative
    width 100%
    background-color white
  }
  .profile_link{
    position relative
    display block
    padding 20px 10px
  }
  .profile_touxiang{
    position  relative
    display inline-block

  }
  .profile_span_right{
    position  relative
    display  inline-block
  }
  .profile_log_act span{
    display inline-block
    font-size 15px
  }
  .icon-shouji{
    font-size 20px
  }
  .profile_log_act p{
    padding-bottom 8px
    margin 0px
    text-align left
  }
  .span_right{
    display inline-block
    position: absolute;
    top 35%
    right 15px
  }
  .span_right i{
    font-size 30px
    color white
  }

  //列表部分
  ul{
    padding-left 10px
    padding-right 10px
    margin 0
  }
  ul li{
    display inline-block
    width 32%
  }
  .money_num{
    font-size 30px
    text-align center
    vertical-align: baseline;
    display inline-block
  }
  .ul_a_span{
    text-align center
    font-size 14px
    padding-bottom 10px
  }
  .money_num_parent{
    vertical-align baseline
    text-align center
    padding 15px
    padding-bottom 10px
  }
  .span_yuan{
    font-weight bold
    color #ff5546
  }
  .span_ge{
    font-weight bold
    color: #fff24a
  }
  .span_fen{
    font-weight bold
    color #31a51f
  }

  //积分 服务
  .profile_server{
    margin-top 10px
  }
  .profile_server a{
    display flex
    padding-left 15px
    background-color white
  }
  .profile_server a span{
    display flex
    font-size 16px
    vertical-align: baseline;
    align-items: center
  }
  .profile_server .iconfont{
    font-size 20px
    font-weight normal
    padding-right 10px
  }
  .server_item{
    padding-top 18px
    padding-bottom 18px
    padding-right 10px;
    width 100%
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
  }
  .server_item .iconfont{
    font-size 12px
  }
    .icon-bianji{
      color #ff2a2e
    }
  .icon-icon-test{
    color #31a51f
  }
  .icon-huiyuan{
    color #fff24a
  }
  .way_right{
    display block
  }

  //服务中心
 .icon-caiyouduo_hemaixiangqing-dianzhuchupiao{
   color #7c60ff
 }
</style>
