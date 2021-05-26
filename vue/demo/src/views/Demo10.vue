<template>
    <div>
        <h1>子组件与父组件通信</h1>

       <!-- <my-component  :text="content" @on-callback="getData"></my-component>

       -->
        <my-component v-model="content"></my-component>
        <div>{{content}}</div>
    </div>

</template>

<script>
    import MyComponent from '../components/compontent2'

    export default {
        name: "demo13",
        data() {
            return {
                content:"文本"
            }

        },
        components: {
            MyComponent
        },methods:{
            getData(val){
                console.log(val);
                this.content = val
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
