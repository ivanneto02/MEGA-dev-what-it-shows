import { render } from 'svelte/server';
import Page from './src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx';
import fs from 'node:fs';
const result=render(Page);
fs.mkdirSync('rendered',{recursive:true});
const assets=fs.existsSync('dist/assets')?fs.readdirSync('dist/assets').filter(f=>f.endsWith('.css')).map(f=>fs.readFileSync('dist/assets/'+f,'utf8')).join('\n'):'';
fs.writeFileSync('rendered/0002-dedupe-by-cause.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${result.head}<style>${assets}</style></head><body>${result.body}</body></html>`);
console.log('Rendered KB page to rendered/0002-dedupe-by-cause.html');
