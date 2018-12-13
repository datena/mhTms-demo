import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 美其名曰叫 “路由去中心化管理”
 * 路由级vue页面必须放/src/page下面，才能自动生成url访问地址,支持多级目录自动生成哦
 * page目录路径为url访问地址; 路由的name值取vue页面定义的name值
 * vue页面meta存放页面自定义的数据，如title,nav,menu等
 */
let mhRoute = {routes:[]};//路由表
let importAllpage = {};//暂存vue文件
// 获取VUE文件列表
((r)=>{r.keys().forEach(key => importAllpage[key.match(/.(\S*).vue/)[1]] = r(key))})(require.context('@/page/', true, /\.vue$/))
// 生产路由表
for (var key in importAllpage) {
  if (importAllpage.hasOwnProperty(key)) {
    const component = importAllpage[key].default
    mhRoute.routes.push({
      path: component.name == 'home' ? '/' : key,//home为项目入口也名称,可根据项目自定义
      name: component.name,
      meta:component.meta?component.meta:{},
      component: component
    })
    delete importAllpage[key]//销毁缓存数据
  }
}
export const router = new Router(mhRoute)

export default {
  router,
}


/**
 * 修改标题
 */
router.beforeEach((to, from, next) => {
    /* 路修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }else{
        document.title = ''
    }
    next()
})


/**
 * 注册vue全局对象,全局自定义的东西都放这里
 */
Vue.prototype.MH = {}


/**
 * 模板动态加载机制
 * 将接口返回的模板数据存到到localStorage
 *    template:{
 *              name:'default',//整个项目的模板
 *              page:{},//用于扩展每个页面的模板
 *              }
 * this.MH.template(this,opt)  将加载到的模板挂到 vue.data.MH_TEMPLATE上面
 * DOM使用 <component v-bind:is="MH_TEMPLATE"></component>动态加载即可
 */
Vue.prototype.MH.template = ((vm,_opt={})=>{
  let opt = {}
  // 默认模板配置
  const defaultTemplateInfo = {
    name:'default',
  }

  try {
    const pageInfo = vm.$route 
    
    opt.tplInfo = JSON.parse(localStorage.getItem('template'))
                      ?JSON.parse(localStorage.getItem('template'))
                        :defaultTemplateInfo
    opt.fileDir = _opt.dir?_opt.dir:pageInfo.path.substring(0,pageInfo.path.lastIndexOf("\/")+1)
    opt.fileName = _opt.name?_opt.name:pageInfo.path.substring(pageInfo.path.lastIndexOf("\/")+1,pageInfo.path.length)
    opt.fileName = opt.fileName?opt.fileName:'home'
  } catch (error) {
    console.warn(`vm对象不存在,无法获取$route信息,导致模板加载失败!(示例:this.$mh.tmplate(this))`)
    return false
  }
  // 自定义模板
  import(`@/template/${opt.tplInfo.name}${opt.fileDir}${opt.fileName}.vue`).then(() => {
      vm.MH_TEMPLATE = () =>import(`@/template/${opt.tplInfo.name}${opt.fileDir}${opt.fileName}.vue`)
  }).catch(error => {
      //当前模板下面未加载到对应的vue文件,尝试加载默认模板下对应的vue文件
      import(`@/template/${defaultTemplateInfo.name}${opt.fileDir}${opt.fileName}.vue`).then(() => {
          vm.MH_TEMPLATE = () =>import(`@/template/${defaultTemplateInfo.name}${opt.fileDir}${opt.fileName}.vue`)
      }).catch(error => {
          //默认模板加载失败,给出警告并退出模板机制
          // console.warn(`⚠️模板加载失败,无效的模板地址!`)   
          return 
      })
  })     
  
})
/* 全局方法 END */