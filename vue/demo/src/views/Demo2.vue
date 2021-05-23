<template>
    <div>
        <h1>v-for遍历数组</h1>
        <div v-for="item in arr">{{item}}</div>
        <div v-for="(num,index) of arr">{{num}}--{{index}}</div>
        <div v-for="(num,index) in arr" :key="index">{{num}}--{{index}}</div>
        <div v-for="(item,key,index) in obj" :key="index">{{item}} ---- {{key}}--{{index}}</div>
    </div>
</template>
<script>
  export default {
    name:"demo2",
    data(){
      return{
        arr:[1,2,3,4,5],
        obj:{
            name:"张三",
            sex:"男",
            age:18
        }
      }
    }
  }
</script>
