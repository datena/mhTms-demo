// 是否为开发环境，默认判断development为开发模式
const IS_DEV = process.env.NODE_ENV=='development'?true:false

/* 调试日志开关,开发模式全开,生产模式建议关闭,默认关闭 */
export const dubug = {
    log:IS_DEV,
    error:IS_DEV,
    warn:IS_DEV,
}

/* 日志上报系统配置 */
export const log = {
    log:false,//访问日志
    error:false,//错误日志
    warn:false,//警告日志
    diy:false,//自定义埋点
}

export default {
    dubug,
    log,
}