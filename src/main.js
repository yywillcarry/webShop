import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import '@/mock/mockServe'
import Pagination from '@/components/Pagination'
import 'swiper/css/swiper.css'
import { Button, MessageBox } from 'element-ui';
import VueLazyload from 'vue-lazyload'
import autumn from '@/assets/images/1002030.jpg'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)
Vue.use(VueLazyload, {
        loading: autumn
    })
    //表单验证
VeeValidate.Validator.localize('zh_CN', {
        messages: {
            ...zh_CN.messages,
            is: (field) => `${field}必须与密码相同`
        },
        attributes: {
            phone: '手机号',
            code: '验证码',
            password: '密码',
            password1: '确认密码',
            agree: '协议'
        }
    })
    //自定义校验规则
VeeValidate.Validator.extend('agree', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})
Vue.component(Button.name, Button);
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')