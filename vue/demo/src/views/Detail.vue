<template>
    <div>
        <h1>Detail</h1>
    </div>

</template>

<script>
    export  default {
        name:"detail",
        mounted() {
            console.log(this.$route)
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
