<template>
    <div >
        <h1 class="title">{{title}}</h1>
        <slot></slot>
        <div class="btns">
            <slot name="btns"></slot>
        </div>
       <!-- <div class="btns">
            <slot name="btns"></slot>
        </div>
        <div class="btns">
            <slot name="btns"></slot>
        </div>-->

    </div>
</template>

<script>

    export default {
        name: "slotDemo",
        props:['title']
    }
</script>

<style scoped>

</style>
