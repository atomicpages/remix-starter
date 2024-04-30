# Remix + Vite Starter Template

👋 Welcome to my starter template for Remix + Vite.

## Stack

- Remix 2.9.x
- Vite 5.2.x
- Tailwind 3.x
- Shadcn components
- MSW 2.x
- [`ky`](https://npm.im/ky) for fetch middleware

### Why MSW?

Sometimes Remix is used as a BFF (backend for frontend) and the integration us making REST/GraphQL calls to a backend. MSW allows folks to mock backend calls and no rely on a deployed backend to write code or to test.

## Extras

- Routes defined as an `enum`
- `fetch` utils to add request ids, deal with header merging, and other goodies
- defined patterns for clients (e.g. redis, memcached)
- Login and account creation pages for free with cookie-based session management 🤑
- A flexible session manager
