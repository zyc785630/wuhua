<template>
<div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">{{$store.state.count}}</button>
  <button @click="incrementAsync">{{$store.state.count}}</button>
</div>
</template>

<script type="text/ecmascript-6">
export default {

  methods:{
    increment(){
      this.$store.dispatch('increment')//emit 都代表分发
    },
    decrement(){
      this.$store.dispatch('decrement')//emit 都代表分发
    },
    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')//emit 都代表分发
    },
    incrementAsync(){
     this.$store.dispatch('incrementAsync')//emit 都代表分发
    },
  }
}
</script>

<style scoped>


</style>
