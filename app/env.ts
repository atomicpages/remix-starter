import { cleanEnv, url, str } from "envalid";

export const env = cleanEnv(process.env, {
  BASE_URL: url({ default: process.env.BASE_URL }),
  COOKIE_SECRET: str({ default: process.env.COOKIE_SECRET }),
});
