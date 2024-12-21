import { Day01 } from "./aoc24/day01";
import { App } from "./app";
import { AppRouteItem } from "./routes";

export const appmap = [
  {
    key: "/app/:pg",
    handler: ((c: any) => c.html(App({ pg: c.param("pg") })))
  },
  // aoc24
  {
    key: "/aoc24/day01",
    handler: ((c: any) => c.html(Day01()))
  }
] as AppRouteItem[];
