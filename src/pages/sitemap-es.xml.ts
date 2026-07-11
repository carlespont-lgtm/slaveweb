import type { APIRoute } from 'astro';
import { sitemapXml } from '../lib/pages';

export const GET: APIRoute = () =>
  new Response(sitemapXml('es'), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
