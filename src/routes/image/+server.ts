import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';
import type { RequestHandler } from './$types';

// Svelte Component To Image
import { image_from_component, type RenderOptions } from 'svelte-component-to-image';

// Normal .svelte component
import HelloWorld from './HelloWorld.svelte';

export const GET: RequestHandler = (async ({ url }) => {
  try {
    const options: RenderOptions = {
      width: 1200,
      height: 600,
      props: {
        text: url.searchParams.get('text') ?? 'text not found'
      },
      fonts: [
        {
          name: 'Jost',
          url: `${url.origin}/jost.woff`,
          weight: 400,
          style: 'normal'
        }
      ],
      debug: false // you can omit this or set it to true to see logs of data, it can help for debug edge cases
    };

    // pass the component and options to the package
    const image = await image_from_component(HelloWorld, options);
    const response = new Response(image);
    if (!dev) {
      // caching on dev will make it hard to see iterations
      response.headers.append('Content-Type', 'image/png');
      response.headers.append('Cache-Control', 's-maxage=604800, stale-while-revalidate=604800');
    }
    return response;
  } catch (e) {
    console.error(e);
    throw error(500, 'Error trying to generate image from component.');
  }
}) satisfies RequestHandler;
