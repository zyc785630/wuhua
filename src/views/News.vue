<template>

     <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item" v-for="(n) in news" :key="n.id">
               {{n.content}}
                <button type="button" class="btn btn-primary" data-toggle="button"
                    aria-pressed="false" autocomplete="off"
                    @click='handlerJump(n)'>
                    {{n.id}}
                </button>
            </li>
           
        </ul>
        <div class="alert alert-success" role="alert">
           <router-view></router-view>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            news:[
                {id:1,content:'newsOne'},
                {id:2,content:'newsTwo'},
                {id:3,content:'newsThree'}
            ]
        }
    },
    methods: {
        handlerJump(){
            this.$router.push("/home/news/info" + n.id +'?newsContent' + n.content)//写 的路由路径
        }
    },
}
</script>

<style scoped>


</style>
