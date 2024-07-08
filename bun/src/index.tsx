import { reactRenderer } from "@hono/react-renderer";
import { Hono } from "hono";
import type { ReactNode } from "react";

const app = new Hono();

app.get(
	"*",
	reactRenderer(
		({ children }: { children: ReactNode }) => {
			return (
				<html lang="en">
					<body>
						<h1>React + Hono</h1>
						<div>{children}</div>
					</body>
				</html>
			);
		},
		{ stream: true },
	),
);

app.get("/", (c) => {
  const res = c.render(<p>Welcome!</p>)
  console.log("rendered /")
	return res;
});

export default app;
