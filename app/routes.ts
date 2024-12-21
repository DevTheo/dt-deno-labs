import { Day01 } from "./aoc24/day01.tsx";
import { HandlerFn, HttpMethodString, IRoute } from "../router.ts";
import { App } from "./app.tsx";


// deno-lint-ignore no-explicit-any
type JsxElement = any; //import("http://jsr.io/@hono/hono/4.6.14/src/jsx/base").JSX.Element;

// type AppRouteFn = 
//     (() => JsxElement) | 
//     (() => Promise<JsxElement>) | 
//     // deno-lint-ignore no-explicit-any
//     ((req: any) => JsxElement) | 
//     // deno-lint-ignore no-explicit-any
//     ((req: any) => Promise<JsxElement>);

export type AppRouteItem = {
    key: string,
    httpmethod?: HttpMethodString
    async?: boolean
    handler: HandlerFn
}

const appmap = [
    {
        key:"/app/:pg", 
        // deno-lint-ignore no-explicit-any
        handler:((c: any) => c.html(App({ ...c.req.param()}))) 
    },
    // aoc24
    {
        key:"/aoc24/day01", 
        // deno-lint-ignore no-explicit-any
        handler:((c: any) => c.html(Day01())) 
    }
] as AppRouteItem[];
    
export const approutes = appmap.map((info) => ({
    path: `${info.key}`,
    type: info.httpmethod ?? "get",
    handler: info.handler,
} as IRoute));