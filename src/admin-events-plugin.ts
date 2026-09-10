import fs from 'node:fs/promises';
import path from 'node:path';
import type { Plugin, ViteDevServer } from 'vite';

const eventsPath = path.resolve(process.cwd(), 'src/data/events.ts');
const partnersPath = path.resolve(process.cwd(), 'src/data/partners.ts');

export function adminEventsPlugin(): Plugin {
  return {
    name: 'admin-events-writer',
    apply: 'serve',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/__admin/events', async (request, response, next) => {
        if (request.method === 'GET') {
          response.setHeader('Content-Type', 'text/plain; charset=utf-8');
          response.end(await fs.readFile(eventsPath, 'utf8'));
          return;
        }

        if (request.method !== 'POST') {
          next();
          return;
        }

        try {
          const chunks: Buffer[] = [];
          for await (const chunk of request) chunks.push(Buffer.from(chunk));
          const body = JSON.parse(Buffer.concat(chunks).toString('utf8')) as { events?: unknown };
          if (!Array.isArray(body.events)) {
            response.statusCode = 400;
            response.end('Invalid events source');
            return;
          }
          const currentSource = await fs.readFile(eventsPath, 'utf8');
          const eventsSource = `export const EVENTS: TechEvent[] = ${JSON.stringify(body.events, null, 2)};`;
          const eventsDeclaration = /export const EVENTS: TechEvent\[\] = [\s\S]*?;\s*$/;
          if (!eventsDeclaration.test(currentSource)) {
            response.statusCode = 500;
            response.end('Could not locate EVENTS declaration');
            return;
          }
          await fs.writeFile(eventsPath, `${currentSource.replace(eventsDeclaration, eventsSource)}\n`, 'utf8');
          response.setHeader('Content-Type', 'application/json');
          response.end(JSON.stringify({ ok: true }));
        } catch {
          response.statusCode = 400;
          response.end('Could not write events.ts');
        }
      });

      server.middlewares.use('/__admin/partners', async (request, response, next) => {
        if (request.method === 'GET') {
          response.setHeader('Content-Type', 'text/plain; charset=utf-8');
          response.end(await fs.readFile(partnersPath, 'utf8'));
          return;
        }

        if (request.method !== 'POST') {
          next();
          return;
        }

        try {
          const chunks: Buffer[] = [];
          for await (const chunk of request) chunks.push(Buffer.from(chunk));
          const body = JSON.parse(Buffer.concat(chunks).toString('utf8')) as { partners?: unknown };
          if (!Array.isArray(body.partners)) {
            response.statusCode = 400;
            response.end('Invalid partners source');
            return;
          }
          const currentSource = await fs.readFile(partnersPath, 'utf8');
          const partnersSource = `export const PARTNERS = ${JSON.stringify(body.partners, null, 2)};`;
          const partnersDeclaration = /export const PARTNERS = [\s\S]*?;\s*$/;
          if (!partnersDeclaration.test(currentSource)) {
            response.statusCode = 500;
            response.end('Could not locate PARTNERS declaration');
            return;
          }
          await fs.writeFile(partnersPath, `${currentSource.replace(partnersDeclaration, partnersSource)}\n`, 'utf8');
          response.setHeader('Content-Type', 'application/json');
          response.end(JSON.stringify({ ok: true }));
        } catch {
          response.statusCode = 400;
          response.end('Could not write partners.ts');
        }
      });
    },
  };
}
