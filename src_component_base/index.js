import Vue from 'vue'//默认这个vue导入的时候补带解析器
import App from './App' //把组装好的整体组件导入到入口文件，准备渲染
Vue.config.productionTip = false
new Vue({
    el:'#root',
    // render:function(createElement){
    //     createElement(App)
    // }
    // render:createElement => createElement(App)
    render: h => h(App) //以后常用的
    //第一步：把导入过来的App组件配置对象，在vue模板当中注册解析为一个标签名<App/>并使用
    //第二步：把这个标签在模板当中进行渲染

    // components:{
    //     App
    // },
    // template:'<App/>'
    /*
        You are using the runtime-only build of Vue where the template compiler is not available. 
        Either pre-compile the templates into render functions
        , or use the compiler-included build.

        原因：默认这个vue导入的时候不带解析器，也没有用render函数
        我们装的vue-template-compiler也没有用上，render函数当中会用到
        所以我们没办法去解析模板
        解决：
            默认其实导入的是这个vue版本vue/dist/vue.runtime.common.js,不带解析器
            导入带解析器的版本vue/dist/vue.esm.js
        哪个好：
            使用render比较好,因为打包体积小，速度快
    */
})