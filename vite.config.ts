import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

function savePointPlugin() {
  return {
    name: 'save-point-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === '/api/save-point' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const { point } = JSON.parse(body);
              
              const isAgotPlus = point.source === 'agot_plus';
              const filePath = path.resolve(import.meta.dirname, 'src/data', isAgotPlus ? 'agotPlusPoints.json' : 'points.json');
              
              const fileContent = fs.readFileSync(filePath, 'utf-8');
              const points = JSON.parse(fileContent);
              
              const index = points.findIndex((p: any) => p.id === point.id);
              if (index !== -1) {
                points[index] = point;
              } else {
                points.push(point); // Allows creating new points as well
              }
              
              fs.writeFileSync(filePath, JSON.stringify(points, null, 2));
              
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error('Error saving point:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: String(error) }));
            }
          });
          return;
        }
        
        if (req.url?.startsWith('/api/proxy-image')) {
          const urlObj = new URL(req.url, 'http://localhost');
          const targetUrl = urlObj.searchParams.get('url');
          if (!targetUrl) {
            res.writeHead(400);
            res.end('Missing url');
            return;
          }
          
          // Use dynamic import for node-fetch if global fetch is missing, but Node 18+ has fetch.
          fetch(targetUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
              'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
              'Referer': new URL(targetUrl).origin + '/',
            }
          }).then(async (fetchRes) => {
            if (!fetchRes.ok) {
              res.writeHead(fetchRes.status);
              res.end('Error fetching image');
              return;
            }
            
            res.writeHead(200, {
              'Content-Type': fetchRes.headers.get('content-type') || 'image/jpeg',
              'Cache-Control': 'public, max-age=31536000'
            });
            
            const arrayBuffer = await fetchRes.arrayBuffer();
            res.end(Buffer.from(arrayBuffer));
          }).catch((err) => {
            console.error('Proxy error:', err);
            res.writeHead(500);
            res.end('Error');
          });
          return;
        }

        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), savePointPlugin()],
})
