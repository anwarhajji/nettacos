export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/mdx-page_msv-G_SF.mjs').then(n => n.m);

export { page };
