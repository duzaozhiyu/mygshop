/*
 包含n个接口的请求模块
 */
import ajax from './ajax'
//根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax('/position/${geohash}');

//获取去食品分类列表
export const reqFoodTypeList=()=>ajax('/index_foodlist')

//根据经纬度获取商铺列表
export const reqShopList=(logitude,latitude)=>('/shopList',{logitude,latitude})
