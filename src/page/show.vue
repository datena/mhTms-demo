<template>
    <div id='show'>
      <keep-alive>
        <component v-bind:is='MH_TEMPLATE'></component>
      </keep-alive>
    </div>
</template>
<script>
    import show from './show';
    export default {
        extends: show,
        // provide: {for:show},
        // provide:{
        //     for: "demo"
        // },
        name: 'show',
        meta: {
          title:'CPS产品详情页',
        },
        data() {
            return {
                //模板变量,必须存在
                MH_TEMPLATE:'',
                query:{},
                //搜索参数
                search:{},
                //存放api接口数据
                apiData:{},
                //自定义数据
                diyData:{},
                //DOM控制
                diyDom:{},
                //post提交对象
                post:{},
                //暂存or临时数据
                tmpData:{},
            }
        },
        //接口请求
        created() {
            console.warn('page-show.vue')
            let dd = 0
            dd = this.mybase(3,7)
            console.log(dd,'show.vue')

            this.abc = 'ddddddddddddd'

            this.MH.template(this)
        },
        methods: {},
    }
</script>
<style lang='less' scoped>
    
</style>