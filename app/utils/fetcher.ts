import ky from "ky";
import { randomUUID } from "crypto";
import { env } from "~/env";

/**
 * A small wrapper around `ky` that injects the `X-Request-ID` header
 * and prepends the base URL to the request if it's not an absolute URL.
 * Add more middleware the `hooks` array.
 */
export const fetcher = ky.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        if (!request.headers.has("X-Request-ID")) {
          request.headers.set("X-Request-ID", randomUUID());
        }

        if (!request.url.startsWith("http")) {
          return new Request(`${env.BASE_URL}${request.url}`, request);
        }
      },
    ],
  },
});
