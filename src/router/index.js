import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import About from "@/views/About"
import Home from "@/views/Home"
import Message from "@/views/Message"
import News from "@/views/News"
import MessageDetail from "@/views/MessageDetail"
import NewsDetail from "@/views/NewsDetail"
// import { Message } from 'element-ui'
export default new VueRouter({
    //用来定义路由
    routes:[
        //每个路由都是一个对象
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                       { 
                        path:'/home/message/info:msgId',
                        component:MessageDetail,
                        // props:true//代表把路由接受到的params参数作为子组件的属性去使用
                        props(route){
                            return {
                                msgId:route.params.msgId,
                                msgContent:route.query.msgContent
                            }
                        },
                        name:'msgInfo'
                    }
                    ]
                },
                {
                    path:'/home/news',
                    component:News,
                    children:[
                        {
                            path:"/home/news/info:newsId",
                            component:NewsDetail
                        }
                    ]
                },
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:"/about"
        },

    ]
})