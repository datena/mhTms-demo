import {dubug} from './mh.config'

window.console['_log'] = console.log
console.log = function(){
  dubug.log && window.console._log(arguments[0],arguments[1]?arguments[1]:'')
}

window.console['_warn'] = console.warn
console.warn = function(){
  dubug.warn && window.console._warn(arguments[0],arguments[1]?arguments[1]:'')
}

window.console['_info'] = console.info
console.info = function(){
  dubug.info && window.console._info(arguments[0],arguments[1]?arguments[1]:'')
}

window.console['_error'] = console.error
console.error = function(){
  dubug.inerrorfo && window.console._error(arguments[0],arguments[1]?arguments[1]:'')
}

/* test */
dubug.warn && console._warn('当前处于开发模式,默认开启所以日志显示,生产会自动关闭,可自行配置mh.config.js/dubug')

//防止window.open被拦截
window['_open'] = window.open
window.open = function(url){
  if(!url) return
  let a = document.createElement("a");
      // a.target = '_blank'
      a.id = 'window_open'
      a.href= url 
      document.getElementsByTagName('body')[0].appendChild(a)
      a.click()
      document.getElementById('window_open').remove()
}


