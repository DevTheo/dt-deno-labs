import { Day01 } from "./aoc24/day01.tsx";
import { HandlerFn, HttpMethodString, IRoute } from "../router.ts";
import { App } from "./app.tsx";
import { Day02 } from "./aoc24/day02.tsx";
import { Day03 } from "./aoc24/day03.tsx";
import { Day04 } from "./aoc24/day04.tsx";
import { Day05 } from "./aoc24/day05.tsx";


// deno-lint-ignore no-explicit-any
type JsxElement = any; //import("http://jsr.io/@hono/hono/4.6.14/src/jsx/base").JSX.Element;

export type AppRouteItem = {
    key: string,
    httpmethod?: HttpMethodString
    async?: boolean
    handler: HandlerFn
}

export const aocdays = [
    { text: "Day 01", route:"/aoc24/day01", ctl: Day01 },
    { text: "Day 02", route:"/aoc24/day02", ctl: Day02 },
    { text: "Day 03", route:"/aoc24/day03", ctl: Day03 },
    { text: "Day 04", route:"/aoc24/day04", ctl: Day04 },
    { text: "Day 05", route:"/aoc24/day05", ctl: Day05 },
];

const appmap = [
    {
        key:"/app/:pg", 
        // deno-lint-ignore no-explicit-any
        handler:((c: any) => c.html(App({ ...c.req.param()}))) 
    },
    // aoc24
    // deno-lint-ignore no-explicit-any
    ...(aocdays.map((i) => ({ key: i.route, handler:((c: any) => c.html(i.ctl())) })) as AppRouteItem[]),
] as AppRouteItem[];
    
export const approutes = appmap.map((info) => ({
    path: `${info.key}`,
    type: info.httpmethod ?? "get",
    handler: info.handler,
} as IRoute));