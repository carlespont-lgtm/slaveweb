import type { APIRoute } from 'astro';
import { searchIndex } from '../lib/search';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(searchIndex('ca')), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
