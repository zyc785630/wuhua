//我们建立的这个模块就是Vuex插件模块
//我们可以把这个模块当作是一个处理数据的系统
//首先我们得知道Vuex系统内部4个核心概念

//首先使用插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


//1、state  代表状态（理解为数据）
//是一个对象，对象内部可以包含多个属性，每个属性值是对应的一个状态数据
//存放数据的地方
const state = {
    //存数据
    count:0 //Vuex处理的一般是多个组件共享的数据
}


//2、mutations 代表直接修改数据的行为
//也是一个对象，对象内部可以包含多个方法，每个方法对应的是对上面数据的一种直接修改的行为
const mutations = {
    //修改（直接）数据  不能写判断  循环  定时器
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}

//3、actions   代表用户在组件当中的行为对应的回调函数内部逻辑方法
//也是一个对象，对象内部可以包含多个方法，每个方法对应的是组件当中用户的一个行为的回调内部逻辑
const actions = {
    increment(context){
        context.commit('increment')
    },
    decrement(context){
        context.commit('decrement')
    },
    incrementIfOdd(context){
        if(context.state.count % 2 === 1){
            context.commit('increment')
        }
    },
    incrementAsync(context){
        setTimeout(() => {
            context.commit('increment')
        }, 1000);
    }
}


//4、getters   代表根据我们的状态数据，计算出来的数据方法（只有getter，没有setter）
//也是一个对象，对象内部包含多个方法，每个方法对应了一个根据state内计算得到的数据（只有getter）
const getters = {

}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})








