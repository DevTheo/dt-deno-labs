
import { BlankEnv } from "hono/types";
import { Context, Hono, MiddlewareHandler } from "hono";
import { staticroutes } from "./static/routes.ts";
import { approutes } from "./app/routes.ts";

export type HttpMethodString = 
    "get" | "post" | "put" | "delete" | "options" | "patch" | "all";

// deno-lint-ignore no-explicit-any
export type HandlerFn = ((c:Context<BlankEnv, any, any>) => any) | 
                        MiddlewareHandler;

export interface IRoute {
    path: string;
    type: HttpMethodString;
    // deno-lint-ignore no-explicit-any
    handler: HandlerFn;
}

const allroutes = [
    ...staticroutes,
    ...approutes
]

export const ssrouter = (app: Hono) => {
    allroutes.forEach((route) => {
        switch(route.type) {
            case "get":
                app.get(route.path, route.handler);
                break;
            case "post":
                app.post(route.path, route.handler);
                break;
            case "put":
                app.put(route.path, route.handler);
                break;
            case "delete":
                app.delete(route.path, route.handler);
                break;
            case "options":
                app.options(route.path, route.handler);
                break;
            case "patch":
                app.patch(route.path, route.handler);
                break;
            case "all":
                app.all(route.path, route.handler);
                break;
            default:
                console.log(`unknown route type: ${route.type} for path: ${route.path}`);
                break;
        }
    });
}
