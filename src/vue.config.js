module.exports = {  
    devServer: {
        proxy: {
          '/api': {
            target: '',
            ws: true,
            changeOrigin: true
          },
          '/foo': {
            target: ''
          }
        }
      }
  }