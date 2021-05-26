<template>
    <div>
        <!--<p>wefwefwelp</p>-->
        <p>{{txt}}</p>
        <p>{{number}}</p>
        <p>{{arr.join('~')}}</p>
        <button @click="modify">修改</button>
    </div>

</template>
<script>
    export default {
        name:"MyCompontent1",
      /*  props:['text','num','arr'],*/
        props:{
            text:{
                type:String,
                request:false,
                default:"默认值"
            },
            num:{
                type: Number,
                validator(value) {
                    return value >100
                }

            },
            arr:{
               type:Array
            }
        },
        data(){
            return {
               txt :this.text
            }
        },
        computed:{
            number(){
                return this.num+1
            }

        },
        methods: {
            modify(){
                this.txt =  'newText'
            }
        }
    }
</script>
