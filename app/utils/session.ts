// app/sessions.ts
import { createCookieSessionStorage } from "@remix-run/node"; // or cloudflare/deno
import { env } from "~/env";

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      // domain: "remix.run",
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      secrets: [env.COOKIE_SECRET],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
