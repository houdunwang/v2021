import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupElementPlugin } from './element'
import { setupMockPlugin } from './mock'
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugin(isBuild))

  setupElementPlugin(plugins)
  return plugins
}
