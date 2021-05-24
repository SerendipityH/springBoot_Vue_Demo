<template>
    <div>
        <h1>双向绑定v-model</h1>
        <input type="text" v-model="text">
        <div>{{text}}</div>


        <!--绑定select-->
        <select v-model="cityCode">
            <option value="">请选择</option>
            <option v-for="city in citys" :key="city.code" :value="city.code">{{city.name}}</option>
        </select>
        <div>{{cityName}}</div>


        <!--绑定radio-->
        <input type="radio" value="male" v-model="gender">男
        <input type="radio" value="female" v-model="gender">女
        <div>{{gender}}</div>


        <!--绑定checkbox-->
        <input type="checkbox" v-model="remember">记住密码
        <div>{{remember}}</div>


        <input type="checkbox" true-value="Y" false-value="N" v-model="remember2">记住密码
        <div>{{remember2}}</div>

        <input type="checkbox" name="hobby" value="cf" v-model="hobby">吃饭
        <input type="checkbox" name="hobby" value="sj" v-model="hobby">睡觉
        <input type="checkbox" name="hobby" value="ddd" v-model="hobby">打豆豆

        <div>{{hobby.join(",")}}</div>


        <!--v-model修饰符-->
        <!--lazy失去焦点更新-->
        <input type="text" v-model.lazy="text">
        <div>{{text}}</div>


        <input type="text" v-model.number="number">
        <div>{{number}}</div>


        <input type="text" v-model.trim="str">
        <div>{{str}}</div>
    </div>

</template>
<script>
    export default {
        name: "demo6",
        data() {
            return {
                text: "abc",
                cityCode: "",
                citys: [
                    {
                        name: "北京",
                        code: "bj"
                    },
                    {
                        name: "上海",
                        code: "sh"
                    },
                    {
                        name: "广州",
                        code: "gz"
                    },
                    {
                        name: "深圳",
                        code: "sz"
                    }

                ],
                gender:"",
                remember: true,
                remember2:'',
                hobby: [],
                number:'',
                str:''
            }

        },computed:{
            cityName(){
              let _city = this.citys.find(city=>city.code===this.cityCode)
                return _city?_city.name:""
            }
        }
    }
</script>
