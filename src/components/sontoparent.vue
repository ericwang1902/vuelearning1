<template>
    <div class="son">
        <h1>{{ msg }}</h1>
        <button @click="onClickMe">Click!</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            msg:'hello from son'
        }
    },
    methods:{
        onClickMe:function(){
            this.$dispatch('child-tellme-something',this.msg);
        }
    }
}
</script>

<style>
.son {
    color: #42b983;
}
</style>