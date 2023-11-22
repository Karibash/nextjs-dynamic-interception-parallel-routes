# nextjs-dynamic-interception-parallel-routes

Reproduction repository for bugs in @cloudflare/next-on-pages when combining dynamic, parallel, and intercept routes.

## Expected behavior

This is how it works with `pnpm run build` and `pnpm run start`.  
The expected operation is performed without any errors during page transitions.

https://github.com/Karibash/nextjs-dynamic-interception-parallel-routes/assets/40270352/d5f6e2e9-b18f-4b3e-a478-fa9adf79c0b5

## Actual Behavior

This is how it works with `pnpm run pages:build` and `pnpm run pages:dev`.  
The parallel route is not retrieving the path parameter correctly and a 404 error is displayed when the page is reloaded.

https://github.com/Karibash/nextjs-dynamic-interception-parallel-routes/assets/40270352/d6a44819-86af-430c-acb1-2350787c0d29
