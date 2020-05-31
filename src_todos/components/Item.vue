<template>
  <li @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)" :class="myClass">
    <label>
        <!-- checkbox 如果获取的值是true,那么就会打勾
        页面刚展示获取值为true就会打勾,在标签内没有写value的情况下，如果写了value，获取的值要和value值对应才会打勾
        后期自己点击打勾，v-model收集的是value值，没有value值，默认收集也是true或者false
        -->
      <input type="checkbox"  v-model="isCheck" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        todo:Object,
        index:Number,
        updateOne:Function,
        deleteOne:Function
    },
    computed: {
        isCheck:{
            get(){
                return this.todo.isOver
            }, 
            //自己点击打勾的状态，其实就是修改isCheck的值
            set(val){//val就是修改后checkbox新的值
                this.updateOne(this.index,val)
            }    
        }
    },
    data(){
        return {
            //设置数据控制删除按钮的出现和隐藏
            isShow:false,
            myClass:'leaveClass'
        }
    },
    methods:{
        handlerItem(flag){
            //移入移出 去修改isShow值，决定删除按钮是否显示
            // if(flag){
            //     this.isShow = true
            //     this.myClass = 'enterClass'
            // }else{
            //     this.isShow = false
            //     this.myClass = 'leaveClass'
            // }
            flag?this.myClass = 'enterClass':this.myClass = 'leaveClass'
            this.isShow = !this.isShow
        },
        deleteT(){
            this.deleteOne(this.index)
        }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.enterClass{
    background-color: #aaa;
}

.leaveClass{
    background-color: #fff;
}


</style>
