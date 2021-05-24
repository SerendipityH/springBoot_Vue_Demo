<template>
    <div>
        <div>{{firstName}}</div>
        <div>{{lastName}}</div>
        <!--computed计算会缓存 函数会重复调用-->
        <div>{{fullName}}</div>
        <button @click="updateFullName()">修改fullName</button>

        <hr>
        <div>{{language}}</div>

        <button @click="switchLanguage('ch')">中文</button>
        <button @click="switchLanguage('en')">英文</button>
        <div>{{zhangsan}}</div>
        <div>{{lisi}}</div>
    </div>


</template>
<script>
    export default {
        name: "demo5",
        data() {
            return {
                firstName: "无始",
                lastName: "大帝",
                language: 'ch',
                zhangsan: "",
                lisi: ""
            }
        },
        computed: {
            /*fullName(){
                return this.firstName + this.lastName;
            }*/
            fullName: {
                get() {
                    return this.firstName + this.lastName;
                },
                set(newVal) {
                    let arr = newVal.split(" ");
                    this.firstName = arr[0];
                    this.lastName = arr[1]
                }
            }
        }, methods: {
            updateFullName() {
                this.fullName = "小 石头"
            },
            switchLanguage(val) {
                this.language = val;

            }
        }, watch: {
            /*language(newVal) {
                if (newVal === 'ch') {
                    this.zhangsan = "张三"
                    this.lisi = "李四"
                } else if (newVal === 'en') {
                    this.zhangsan = "zhangsan"
                    this.lisi = "lisi"
                }
            }*/
            language:{
                handler(newVal) {
                    if (newVal === 'ch') {
                        this.zhangsan = "张三"
                        this.lisi = "李四"
                    } else if (newVal === 'en') {
                        this.zhangsan = "zhangsan"
                        this.lisi = "lisi"
                    }
                },immediate:true
            }
        }
    }
</script>
