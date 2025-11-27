import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: 'autoUpdate',
includeAssets: ['favicon.svg', 'robots.txt', 'icons/*'],
manifest: {
name: 'WebNova PWA',
short_name: 'WebNova',
description: 'Progressive Web App built with React + Vite',
theme_color: '#ffffff',
background_color: '#ffffff',
display: 'standalone',
start_url: '/',
icons: [
{
src: 'icons/pwa-192x192.png',
sizes: '192x192',
type: 'image/png'
},
{
src: 'icons/pwa-512x512.png',
sizes: '512x512',
type: 'image/png'
}
]
},
workbox: {
runtimeCaching: [
{
urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
handler: 'CacheFirst',
options: {
cacheName: 'google-fonts',
expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
}
}
]
}
})
],
server: {
port: 5173
}
})