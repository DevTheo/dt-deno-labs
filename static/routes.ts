import { Hono } from 'hono';
import { serveStatic } from 'hono/deno'
import { IRoute } from "../router.ts";

const files = [
    "site.webmanifest",
    "images/android-chrome-192x192.png",
    "images/android-chrome-512x512.png",
    "images/apple-touch-icon.png",
    "images/favicon.ico",
    "images/favicon-16x16.png",
    "images/favicon-32x32.png",
    "images/header-content-bg_@2x.png",
    "css/base.css",
    "css/main.css",
    "js/font-awesome-all.min.js",
    "js/jquery-3.2.1.min.js",
    "js/main.js",
    "js/modernizr.js",
    "js/htmx.min.js",
];

export const staticroutes1 = (app: Hono) => {
    files.forEach((file:string) => {    
        console.log(`configuring route: ./${file}`);    
        app.get(`/${file}`, serveStatic({ path: `./static/${file}`}));
    })
}

export const staticroutes = files.map((file) => ({
    path: `/${file}`,
    type: "get",
    handler: serveStatic({ path: `./static/${file}`}),
} as IRoute))
