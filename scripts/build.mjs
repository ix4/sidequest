import {cp,mkdir,rm} from 'node:fs/promises';
await import('./check.mjs');
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await cp('site','dist',{recursive:true});
console.log('Built site → dist/');
