<template>
 <ul class="list-group">
    <li class="list-group-item">msgId:{{msgId}}</li>
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">msgTitle:{{title}}</li>
    <!-- <li class="list-group-item">message04</li> -->
</ul>
</template>

<script type="text/ecmascript-6">

let msgTitles = [
    {id:1,title:'001'},
    {id:2,title:'002'},
    {id:3,title:'003'}
]

export default {
    props:['msgId','msgContent'],
    data() {
        return {
            title:''
        }
    },
    mounted() {
       this.show()
    },
    watch: {
        $route(newVal,oldVal){
           this.show()
        }
    },
    methods: {
        show(){
            setTimeout(()=>{
            this.title = msgTitles.find(item=> item.id===this.msgId*1).title
        },1000)
    },
}
</script>

<style scoped>


</style>
