<template>
    <div>
        <h1>路由 vue-router</h1>
        <div>{{$route.fullPath}}</div>
        <div>
            <button @click="change">切换路由</button>
        </div>
    </div>

</template>

<script>


    export default {
        name: "demo12",
        data() {
            return {

            }

        },mounted() {
            console.log(this.$route)
        },methods:{
            change(){
                //通过js切换路由
                /*this.$router.push('/demo5')*/
               /* this.$router.push({
                    name:"Demo5",
                    params:{
                      id:34,
                      type:'abcd'
                    },
                    query:{
                        key:'abc'
                    },hash:'#app'
                })*/
                /*this.$router.push({
                    path:'demo5/3333/detail',
                   /!* params:{
                        id:34,
                        type:'abcd'
                    },*!/
                    query:{
                        key:'abc'
                    },hash:'#app'
                })*/
         /*   <router-link :to=" {
                path:'demo5/3333/detail',
                    query:{
                    key:'abc'
                },hash:'#app'
            }">Demo11
            </router-link>*/
                //replace不会产生历史记录
                this.$router.replace({
                    path:'demo5/3333/detail',
                    /* params:{
                         id:34,
                         type:'abcd'
                     },*/
                    query:{
                        key:'abc'
                    },hash:'#app'
                })
            }
        }


    }
</script>
<style lang="less" scoped>
    .drag {
        position: absolute;
        width: 400px;
        height: 300px;
        background: red;
    }
</style>
