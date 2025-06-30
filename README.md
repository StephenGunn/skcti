# svelte-component-to-image Minimal Example

Minimal reproduction for getting [svelte-component-to-image](https://github.com/StephenGunn/svelte-component-to-image) working on Vercel.

**Live**: https://skcti.vercel.app

## Key Steps

1. **Install the package**

   ```bash
   pnpm add -D svelte-component-to-image
   ```

2. **Add the Vite plugin** to `vite.config.ts`:

   ```typescript
   import { svelte_component_to_image } from 'svelte-component-to-image/vite';

   export default defineConfig({
   	plugins: [sveltekit(), svelte_component_to_image()]
   });
   ```

3. **Create component** (`src/routes/image/HelloWorld.svelte`) with `<svelte:options css="injected" />`

4. **Create endpoint** (`src/routes/image/+server.ts`)

5. **Add font** to `static/` directory (optional)

6. **Use image** via `<img src="/image?text=Hello">`

That's it! No complex configurations needed thanks to Paolo Ricciuti's improvements.

See the [blog post](https://jovianmoon.io/posts/generating-open-graph-images-with-sveltekit-components) for detailed explanation.
