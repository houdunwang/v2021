import path from 'path'
import { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../src'),
} as AliasOptions

export default alias
