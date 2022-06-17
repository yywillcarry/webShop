// 13700000000 111111
import request from "./request";
import mockAjax from './mockAjax'
//三级联动数据
export const reqCategoryList = () => {
        return request({ url: '/product/getBaseCategoryList', method: 'get' })
    }
    //获取banner
export const reqGetBannerList = () => {
        return mockAjax({ url: '/banner', method: 'get' })
    }
    //获取floor
export const reqFloorList = () => {
    return mockAjax({ url: '/floor', method: 'get' })
}
export const reqGetSearchInfo = (params) => {
        return request({
            url: '/list',
            method: 'post',
            data: params
        })
    }
    //详情页
export const reqGoodsInfo = (skuId) => {
        return request({
            url: `/item/${skuId}`,
            method: 'GET',
        })
    }
    //将产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
        return request({
            url: `/cart/addToCart/${skuId}/${skuNum}`,
            method: 'post',
        })
    }
    //获取购物车列表
export const reqCartList = () => {
        return request({
            url: "/cart/cartList",
            method: 'get',
        })
    }
    //删除购物车
export const reqDeleteCartById = (skuId) => {
        return request({
            url: `/cart/deleteCart/${skuId}`,
            method: 'delete',
        })
    }
    //修改选中状态
export const reqUpdateCheckedByid = (skuId, isChecked) => {
        return request({
            url: `/cart/checkCart/${skuId}/${isChecked}`,
            method: 'get',
        })
    }
    //获取验证码
export const reqGetCode = (phone) => {
        return request({
            url: `/user/passport/sendCode/${phone}`,
            method: 'get',
        })
    }
    //注册
export const reqUserRegister = (data) => {
        return request({
            url: "/user/passport/register",
            method: 'post',
            data: data
        })
    }
    //登录
export const reqUserLogin = (data) => {
        return request({
            url: "/user/passport/login",
            method: 'post',
            data: data
        })
    }
    //获取用户登录信息
export const reqUserInfo = () => {
        return request({
            url: "/user/passport/auth/getUserInfo",
            method: 'get',
        })
    }
    //退出登录
export const reqLogout = () => {
        return request({
            url: "/user/passport/logout",
            method: 'get',
        })
    }
    //交易页面信息
export const reqAddressInfo = () => {
    return request({
        url: "/user/userAddress/auth/findUserAddressList",
        method: 'get',
    })
}

export const reqOrderInfo = () => {
        return request({
            url: "/order/auth/trade",
            method: 'get',
        })
    }
    //提交订单
export const reqSubmitOrder = (tradeNo, data) => {
        return request({
            url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
            method: 'post',
            data
        })
    }
    ///获取支付信息

export const reqPayInfo = (orderId) => {
        return request({
            url: `/payment/weixin/createNative/${orderId}`,
            method: 'get',

        })
    }
    ///获取支付状态

export const reqPayStatus = (orderId) => {
        return request({
            url: `/payment/weixin/queryPayStatus/${orderId}`,
            method: 'get',

        })
    }
    ///获取个人中心

export const reqMyOrderList = (page, limit) => {
    return request({
        url: `/order/auth/${page}/${limit}`,
        method: 'get',

    })
}