import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https://github.com/lmybanez-web/Personal-Portfolio/', // ⚠️ Must match your repo name exactly!
  plugins: [react()],
})
