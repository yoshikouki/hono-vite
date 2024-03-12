import { Hono } from "hono";
import { setCookie } from "hono/cookie";

const app = new Hono()

app.get("/", (c) => {
  setCookie(c, "hoge", crypto.randomUUID());
  return c.text("Hello World")
})

export default {
  port: 3333,
  fetch: app.fetch
}
