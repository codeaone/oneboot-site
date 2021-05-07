import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'oneboot-site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  scripts:['https://hm.baidu.com/hm.js?e1432f90e7faf3c3f390136316bc9827']
  // more config: https://d.umijs.org/config
});
