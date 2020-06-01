<template>
<div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">{{count}}</button>
  <button @click="incrementAsync">{{count}}</button>

  <p>4倍的count {{currentCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'
export default {
  // data(){
  //   return {
  //     count:0
  //   }
  // },
  // methods:{
  //   increment(){
  //     //这里本来就是直接让数据增加的，没必要分发给actions然后再通过mutatios,可以直接
  //     //提交给mutations去处理数据
  //     this.$store.commit('increment')
  //   },
  //   decrement(){
  //     this.$store.commit('decrement')
  //   },

  //   incrementIfOdd(){
  //     this.$store.dispatch('incrementIfOdd')
  //   },
  //   incrementAsync(){
  //     this.$store.dispatch('incrementAsync')
  //   }
  // },
  methods:{
      // increment(){
      //   //这里本来就是直接让数据增加的，没必要分发给actions然后再通过mutatios,可以直接
      //   //提交给mutations去处理数据
      //   this.$store.commit('increment')
      // },
      // decrement(){
      //   this.$store.commit('decrement')
      // },

      ...mapMutations(['increment','decrement']),
      //相当于是上面的简写方式，它会把increment映射到对应的mutations方法
      //会返回一个对象：{
                      //   increment：function increment(){}, 
                      //   decrement:function decrement(){}
                      // }
      




      // incrementIfOdd(){
      //   this.$store.dispatch('incrementIfOdd')
      // },
      // incrementAsync(){
      //   this.$store.dispatch('incrementAsync')
      // }
      ...mapActions(['incrementAsync']),
      ...mapActions({'incrementIfOdd':'IncrementIfOdd'})
      //相当于是上面的简写方式，它会把incrementIfOdd映射到对应的actions方法
      //如果名字一样，可以把参数写成数组形式，如果不一样只能一个一个单独去写，参数写成对象
      
    },

  computed:{
    ...mapState(['count']),
    ...mapGetters(['currentCount'])

  }
}
</script>

<style scoped>


</style>
