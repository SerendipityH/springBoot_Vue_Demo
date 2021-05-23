<template>
    <div>
        <h1>时间修饰符</h1>
        <div @click="fatherClick">
            父级
            <div @click="subClick1">子集1</div>
            <div @click.stop="subClick2">子集2</div>
        </div>

        <hr>

        <div @click.right.prevent="rightClick">点击右键</div>


        <div @click.self="fatherClick">
            父级
            <div @click="subClick1">子集1</div>
            <div @click.stop="subClick2">子集2</div>
        </div>
        <hr>

        <input type="text" @keydown.ctrl="ctrlEvent">
        <hr>
        <input type="text" @keydown.enter="enterEvent">
        <hr>
        <input type="text" @keydown.delete.prevent="deleteEvent">


        <hr>
        <input type="text" @keydown.space.prevent="spaceEvent">






    </div>


</template>
<script>
    export default {
        name: "demo4",
        data() {
            return {}
        },methods:{
            fatherClick(){
                console.log("父级事件")
            },
            subClick1(){
                console.log("子集事件1")
            },
            subClick2(){
                console.log("子集事件2")
            },
            rightClick(){
                console.log("右键事件")
            },
            ctrlEvent(){
                console.log("ctrl")
            },
            enterEvent(){
                console.log("按下enter")
            },
            deleteEvent(){
                console.log("按下delete")
            },
            spaceEvent(){
                console.log("按下space")
            }

        }
    }
</script>
