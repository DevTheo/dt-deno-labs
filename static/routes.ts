import { Hono } from 'hono';
import { serveStatic } from 'hono/deno'

const files = [
    "site.webmanifest",
    "index.html",
    "archives.html",
    "blog.html",
    "demo.html",
    "page.html",
    "single.html",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "css/base.css",
    "css/main.css",
    "js/font-awesome-all.min.js",
    "js/jquery-3.2.1.min.js",
    "js/main.js",
    "js/modernizr.js",
    "js/htmx.min.js",
];

export const staticroutes = (app: Hono) => {
    files.forEach((file:string) => {    
        console.log(`configuring route: ./${file}`);    
        app.get(`/${file}`, serveStatic({ path: `./static/${file}`}));
    })
}