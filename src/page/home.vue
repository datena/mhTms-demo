<template>
    <div id="home">
        <keep-alive>
            <component v-bind:is="MH_TEMPLATE"></component>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'home',
        meta: { 
            title:'CPS商城首页',    
        },
        data() {
            return {
                MH_TEMPLATE:'',
            }
        },
        created() {
            this.MH.template(this)
        },
    }
</script>

<style lang="" scoped>
    
</style>