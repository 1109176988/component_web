import { fileURLToPath, URL } from 'node:url'
import monacoEditorPlugin, { IMonacoEditorOpts } from "vite-plugin-monaco-editor"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // monacoEditorPlugin() 不能不写{}配置项 会报 Cannot read properties of undefined (reading 'languageWorkers')这个错
    monacoEditorPlugin({ languages: ['javascript', 'typescript', 'html', 'css', 'json','java','sql','groovy','shell','python']} as IMonacoEditorOpts),   
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
