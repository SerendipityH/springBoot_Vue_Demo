<template>
    <div>
        <h1>组件插槽slot(内容分发)</h1>
        <slot-demo title="这是标题">
            <!--默认插槽default-->
            <!--可以写出v-slot-->
            <template v-slot:default>
                <div>这是内容</div>
            </template>
            <!--具体-->
            <template v-slot:btns>
                <button>按钮</button>
                <button>按钮2</button>
            </template>
        </slot-demo>
    </div>

</template>

<script>
    import slotDemo from '../components/slotDemo'

    export default {
        name: "demo11",
        data() {
            return {
                content:"文本"
            }

        },
        components: {
            slotDemo
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
