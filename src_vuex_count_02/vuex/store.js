import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    //存数据
    count:0
}

const mutations = {
    //直接更改
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}

const actions = {
    //这里也不能直接对数据进行操作，得提交给mutations
    // increment(context){
    //     context.commit('increment')
    // },
    // decrement(context){
    //     context.commit('decrement')
    // },
    IncrementIfOdd(context){
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

const getters = {
    currentCount(state){
        return state.count * 4
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})