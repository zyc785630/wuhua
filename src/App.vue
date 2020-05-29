<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <!-- <Add :addComment="addComment"/> -->
        <!-- <Add ref="add"/> -->
        <Add @addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from '@/components/Add'
import List from '@/components/List'

export default {
    // mounted(){
    //     this.$refs.add.$on('addComment',this.addComment)
    // },
    components:{
        Add,
        List
    },
    data(){
        return {
            comments:[
                {id:1,content:'Vue不错',username:'aaa'},
                {id:2,content:'Vue666',username:'bbb'},
                {id:3,content:'Vue还行',username:'ccc'}
            ]
        }
    },
    methods:{
        addComment(obj){
            this.comments.unshift(obj)
        },
        deleteComment(index){
            this.comments.splice(index,1)
        }
    }
};
</script>

<style scoped>
</style>
