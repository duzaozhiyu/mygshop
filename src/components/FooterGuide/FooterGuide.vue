<template>
   <div class="footer_guider">
     <span class="item_guider on">
       <span>
         <i class="iconfont icon-shouye"></i>
       </span>
       <span>外卖</span>
     </span>
     <span class="item_guider">
       <span>
         <i class="iconfont icon-sousuo"></i>
       </span>
       <span>搜索</span>
     </span>
     <span class="item_guider">
       <span>
         <i class="iconfont icon-quanbudingdan"></i>
       </span>
       <span>订单</span>
     </span>
     <span class="item_guider">
       <span>
         <i class="iconfont icon-gerenzhongxin"></i>
       </span>
       <span>我的</span>
     </span>
   </div>
</template>

<script>
export default {
  name: 'FooterGuide'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .footer_guider{
      position fixed
      z-index 100
      left 0
      right 0
      bottom 0
      background-color #fff
      width 100%
      height 50px
      display flex
    }
   .item_guider {
     display flex
     flex 1
     text-align center
     flex-direction column
     align-items center
     margin 5px
     color #999999
   }
   .on{
       color #02a774
    }
    span{
       font-size 12px
       margin-top 2px
       margin-bottom 2px
    }
    .iconfont{
         font-size 22px
   }
</style>
