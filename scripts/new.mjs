import {readFile,writeFile,mkdir,access} from 'node:fs/promises';
const [kind,slug,title]=process.argv.slice(2);
if(!['page','dashboard'].includes(kind)||!slug||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)||!title){console.error('Usage: npm run new -- page|dashboard your-slug "Your title"');process.exit(1)}
const route=`${kind==='page'?'pages':'dashboards'}/${slug}/`;
const catalog=JSON.parse(await readFile('site/catalog.json','utf8'));
if(catalog.some(e=>e.path===route))throw Error('That route already exists');
try{await access(`site/${route}`);throw Error('That folder already exists')}catch(e){if(e.code!=='ENOENT')throw e}
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
await mkdir(`site/${route}`,{recursive:true});
await writeFile(`site/${route}index.html`,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(title)} on Sidequest"><title>${escape(title)} · Sidequest</title><link rel="icon" href="../../assets/favicon.svg"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"><link rel="stylesheet" href="../../assets/style.css"></head><body><div class="wrap"><header><a class="logo" href="../../index.html">Sidequest ↗</a></header><main class="intro"><div class="eyebrow">${kind}</div><h1>${escape(title)}</h1><p>Your next side quest starts here.</p></main></div></body></html>`);
catalog.push({title,kind,description:'Your next side quest starts here.',path:route,symbol:'↗',color:kind==='page'?'orange':'purple'});
await writeFile('site/catalog.json',JSON.stringify(catalog,null,2)+'\n');console.log(`Created site/${route} and added it to the collection.`);
