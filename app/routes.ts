import { Hono } from "hono";
import { Day01 } from "./aoc24/day01.tsx";

const aoc24map = [
    {key:"day01", fn:Day01}
]

export const approutes = (app: Hono) => {
    aoc24map.forEach((info) => {
        app.get(`/aoc24/${info.key}`, (c) => {
            return c.html(info.fn());
        });            
    })
};