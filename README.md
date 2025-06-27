# svelte-component-to-image Serverless Example

Minimal reproduction for getting [svelte-component-to-image](https://github.com/StephenGunn/svelte-component-to-image) working on Vercel.

**Live**: https://skcti.vercel.app

## Key Steps

1. **Install packages**

   ```bash
   npm install svelte-component-to-image @resvg/resvg-js
   ```

2. **Mark `@resvg/resvg-js` as external** in both configs:
   - `vite.config.ts`: `build.rollupOptions.external`
   - `svelte.config.js`: `adapter({ external: ['@resvg/resvg-js'] })`

3. **Create component** (`src/routes/image/HelloWorld.svelte`)

4. **Create endpoint** (`src/routes/image/+server.ts`)

5. **Add font** to `static/` directory

6. **Use image** via `<img src="/image?text=Hello">`

See the [blog post](https://jovianmoon.io/posts/installing-and-using-svelte-component-to-image) for detailed explanation.
