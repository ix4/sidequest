import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('site');const port=Number(process.env.PORT||4173);
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return}if((await stat(file)).isDirectory())file=path.join(file,'index.html');res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(await readFile(file))}catch{res.writeHead(404,{'Content-Type':'text/html'});res.end(await readFile(path.join(root,'404.html')))}}).listen(port,'127.0.0.1',()=>console.log(`Sidequest → http://localhost:${port}`));
