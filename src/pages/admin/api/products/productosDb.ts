import type { APIRoute } from "astro";
import { db, Products, Brands, Categories, eq } from 'astro:db';




export const GET: APIRoute = async ({ params, request }) => {

  let x = await db.select().from(Products).leftJoin(Brands, eq(Products.brandsFk, Brands.uid));
  
  console.log(x);
  return new Response(JSON.stringify({
      message: "This was a GET!"
    })
  )
}


