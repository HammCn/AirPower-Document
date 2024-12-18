# 基础配置

## 环境变量

### 本地环境变量 .env

```conf
VITE_APP_NAME = "本地环境"
VITE_APP_API_URL = "/api/"
VITE_APP_WEBSOCKET_URL = "ws://127.0.0.1:8080/websocket"
VITE_APP_OAUTH_URL = "/oauth2/authorize"
VITE_APP_STATIC_URL = "/static/"
```

本地环境变量一般需要配合 `vite.config.mts` 使用：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  build: {
    assetsDir: 'assets-vite-config',
    // 暂时设置为false vite的BUG keep_classnames不生效导致反射获取类失败
    minify: false,
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    // 测试可以用我们提供的 https://service.hamm.cn 
    // 推荐我们的后端项目 https://github.com/HammCn/AirPower4J
    proxy: {
      '/api': {
        // target: 'https://service.hamm.cn/api/',
        target: 'http://127.0.0.1:8080/',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      // '/oauth2': 'https://service.hamm.cn',
      '/oauth2': 'http://127.0.0.1:8080',
    },
  },
})

```

### 其他环境变量

其他环境变量为 `.env.xxx` 文件，例如：`.env.production`，`.env.development`，`.env.test`，其中 `xxx` 为环境名称。

可配合 `package.json` 的快速脚本来实现：


```json
{
  "test": "vite build --mode test",
  "production": "vite build --mode production",
}
```

