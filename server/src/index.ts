import { Hono } from 'hono';

const app = new Hono()

app.get('*', async (c) => {
  console.log("c.req.path", c.req.path);
  console.log("c.req.url", c.req.url);
  const response = await fetch(`http://localhost:5173${c.req.path}`, {
    headers: c.req.header(),
  });
  const newResponse = new Response(response.body, response);
  return newResponse;
})

export default app
