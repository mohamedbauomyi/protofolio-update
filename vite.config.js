import { env } from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  env.GITHUB_ACTIONS === 'true' &&
  repositoryName &&
  !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
