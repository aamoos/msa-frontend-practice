const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3000',  // 프록시 대상
        changeOrigin: true,               // 필요한 경우, 호스트 헤더 변경
        pathRewrite: {                    // 필요한 경우, 경로 재작성
          '^/api/v1': ''                  // 실제 요청에서 '/api/v1'를 삭제
        }
      }
    }
  }
})