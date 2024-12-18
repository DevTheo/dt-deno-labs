import { Hono } from 'hono'
// import { logger } from 'hono/logger'
// import { poweredBy } from 'hono/powered-by'
import { staticroutes } from "./static/routes.ts";
import { approutes } from "./app/routes.ts";
const app = new Hono()

staticroutes(app);
approutes(app);

app.get('/', (c) => {
  return c.redirect('/index.html');
});

Deno.serve(app.fetch)
