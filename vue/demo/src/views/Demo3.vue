<template>
    <div>
        <h1>{{number}}</h1>
        <button v-on:click="add">加1</button>
        <button @click="reduce">减1</button>
        <button @click="reduce(2,$event)">减2</button>

        <hr>
        <div v-if="isShow">isShow为true</div>
        <div v-else>isShow为false</div>
        <button @click="toggle">切换</button>

        <hr>

        <ul>
            <li v-for="news in newsList " :key="news.id">{{news.title}}{{news.id}}</li>
        </ul>
        <button @click="addNews">添加</button>
        <button @click="removeNews">删除</button>
        <button @click="updateNews">修改</button>

        <hr>
        <div v-for="(key,val,index) in obj" :key="key">
            {{index}} {{key}} {{val}}
        </div>
        <button @click="addAttr">添加属性</button>
        <button @click="removeAttr">删除属性</button>
        <button @click="updateAttr">修改属性</button>
    </div>


</template>
<script>
    export default {
        name: 'demo3',
        data() {
            return {
                number: 1,
                isShow: false,
                newsList: [
                    {
                        id:1,
                        title:'标题'
                    },
                    {
                        id:2,
                        title:'标题'
                    },
                    {
                        id:3,
                        title:'标题'
                    },{
                        id:4,
                        title:'标题'
                    }



                ],
                obj:{
                    name :'张三',
                    age:18,
                    gender :'男'
                }
            }
        }, methods: {
            add(event) {
                this.number++;
            },
            reduce(val, event) {
                if (typeof val === 'number') {
                    console.log(event);
                    this.number -= val;
                } else {
                    this.number--;
                }

            },
            toggle() {
                this.isShow = !this.isShow;
            },
            addNews(){
              /*  this.newsList.unshift({
                    id : this.newsList.length+1,
                    title:'标题'
                })*/
                this.newsList.push({
                    id : this.newsList.length+1,
                    title:'标题'
                })
            },
            removeNews(){
                this.newsList.pop();
            },
            updateNews(){


                this.$set(this.newsList,0,{
                    id:Date.now(),
                    title:"修改标题"
                })
            },
            addAttr(){
                // this.$set(this.obj,'hobby',"hobby")
                this.obj = {
                    ...this.obj,
                    hobby:"吃饭"
                }
            },
            removeAttr(){
                let _obj = {...this.obj};
                delete _obj.name;
                this.obj = _obj
            },
            updateAttr(){
                this.obj.age = 40
            },
        }
    }
</script>
