import { render } from 'svelte/server';
import Page from './src/routes/kb/incidents/4471-review/+page.svx';
import Decision from './src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx';
import fs from 'node:fs';

fs.mkdirSync('rendered',{recursive:true});
const assets=fs.existsSync('dist/assets')?fs.readdirSync('dist/assets').filter(f=>f.endsWith('.css')).map(f=>fs.readFileSync('dist/assets/'+f,'utf8')).join('\n'):'';
for (const [name, component] of [['4471-review', Page], ['0002-dedupe-by-cause', Decision]]) {
const result=render(component);
fs.writeFileSync(`rendered/${name}.html`,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${result.head}<style>${assets}</style></head><body>${result.body}</body></html>`);
console.log(`Rendered ${name}`);
}
