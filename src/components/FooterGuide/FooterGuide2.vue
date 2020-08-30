<template>
  <table class="footer_guider">
    <tr class="tr_item">
      <td :class="{on:'/msite'==$route.path}" @click="toPath('/msite')">
          <span>
            <i class="iconfont icon-shouye"></i>
          </span>
          <span>外卖</span>
      </td>
      <td :class="{on:'/search'==$route.path}" @click="toPath('/search')">
          <span>
           <i class="iconfont icon-sousuo"></i>
          </span>
          <span>搜索</span>
      </td>
      <td :class="{on:'/order'==$route.path}" @click="toPath('/order')">
         <span>
         <i class="iconfont icon-quanbudingdan"></i>
         </span>
         <span>订单</span>
      </td>
      <td :class="{on:'/profile'==$route.path}" @click="toPath('/profile')">
          <span>
          <i class="iconfont icon-gerenzhongxin"></i>
          </span>
          <span>我的</span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'FooterGuide2',
  methods: {
    toPath (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .footer_guider {
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    //display flex
    display: table
  }
  .tr_item{
    width:100%
    height :100%
  }
  .tr_item td {
    width:25%;
    text-align center
    padding 5px;
  }
  .on{
    color: #31a51f
  }
  .footer_guider .iconfont{
    font-size 25px
  }
  span{
    display:block;
    font-size 12px;
  }
  .header span{
    font-size 20px
  }
</style>
