import { Hono } from 'hono'
// import { logger } from 'hono/logger'
// import { poweredBy } from 'hono/powered-by'
import { ssrouter } from "./router.ts";
const app = new Hono()

ssrouter(app);

app.get('/', (c) => {
  return c.redirect('/app/index');
});

Deno.serve(app.fetch)
