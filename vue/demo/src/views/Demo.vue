<template>
  <div class="demo">
    <h1>{{result}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'Demo',
    data(){
      return{
        result:''
      }
    },
    created() {
      this.$ajax('http://localhost:8080/hello').then(res => {
        this.result = res.data;
        console.log(res.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>
