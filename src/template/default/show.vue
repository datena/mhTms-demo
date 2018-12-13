<template>
    <div id='show'>
    default-show<br>
    {{abc}}
    </div>
</template>
<script>
    import show from '@/page/show';
    export default {
        name: 'show',
        extends: show,
        data() {
            return {
                //url参数
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
            console.warn('default-show')
            let dd = 0
            dd = this.mybase(7,7)
            console.log(dd,'D---show.vue')

            this.abc = 'default-show-abc=============22222222222'
            console.log(this,'this')
        },
        methods: {},
    }
</script>
<style lang='less' scoped>
    
</style>