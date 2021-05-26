<template>
    <div>
        <h1>组件</h1>
        <!--        <my-component></my-component>-->
        <!--  <my-component text = 'abc'>fe</my-component>-->
        <!-- <my-component :text="msg"></my-component>-->
        <my-component :num="number" :arr="list" :text="msg"></my-component>
    </div>

</template>

<script>
    import MyComponent from '../components/compontent1'

    export default {
        name: "demo12",
        data() {
            return {
                msg: "msg",
                number: 121,
                list: [1, 2, 3, 4, 5]
            }

        },
        components: {
            MyComponent
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
