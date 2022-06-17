import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import store from "@/store";

//不重写多次点击跳转会抛出错误
let originPush = VueRouter.prototype.push;

let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
let router = new VueRouter({
    routes: [{
            path: '/home',
            component: () =>
                import ('@/pages/Home'),
            meta: {
                show: true
            }
        },
        {
            path: '/login',
            component: () =>
                import ('@/pages/Login'),
            meta: {
                show: false
            }
        }, {
            path: '/register',
            component: () =>
                import ('@/pages/Register'),
            meta: {
                show: false
            }
        }, {
            name: 'search',
            //问号指定params参数可传可不传
            path: '/search/:keywords?',
            component: () =>
                import ('@/pages/search'),
            meta: {
                show: true
            }
        }, {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/detail/:skuId',
            component: () =>
                import ('@/pages/Detail'),
            meta: {
                show: true
            }
        },
        {
            name: 'addcartsuccess',
            path: '/addcartsuccess',
            component: () =>
                import ('@/pages/AddCartSuccess'),
            meta: {
                show: true
            }
        }, {
            name: 'shopcart',
            path: '/shopcart',
            component: () =>
                import ('@/pages/ShopCart'),
            meta: {
                show: true
            }
        }, {
            name: 'trade',
            path: '/trade',
            component: () =>
                import ('@/pages/Trade'),
            meta: {
                show: true
            },
            beforeEnter(to, from, next) {
                if (from.path == '/shopcart') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            name: 'pay',
            path: '/pay',
            component: () =>
                import ('@/pages/Pay'),
            meta: {
                show: true
            },
            beforeEnter(to, from, next) {
                if (from.path == '/trade') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            name: 'paysuccess',
            path: '/paysuccess',
            component: () =>
                import ('@/pages/PaySuccess'),
            meta: {
                show: true
            }
        }, {
            name: 'center',
            path: '/center',
            component: () =>
                import ('@/pages/Center'),
            meta: {
                show: true
            },
            children: [{
                name: 'myorder',
                path: 'myorder',
                component: () =>
                    import ('@/pages/Center/myOrder'),
            }, {
                name: 'grouporder',
                path: 'grouporder',
                component: () =>
                    import ('@/pages/Center/groupOrder'),
            }, {
                path: '/center',
                redirect: '/center/myorder'
            }]
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    let token = store.state.user.token
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            next()
        }
    } else {
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath)
        }
        next()
    }

})



export default router;