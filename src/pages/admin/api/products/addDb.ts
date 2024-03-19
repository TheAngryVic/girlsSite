import type { APIRoute } from "astro";
import { db, Products, Brands, Categories, eq } from 'astro:db';

import { v4 as uuidv4 } from 'uuid';
export const POST: APIRoute = async ({ request }) => {
  

 
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    console.log(body);
    let {  name, price, categoriescbx, brandscbx } = body;
    if (name === "" || price === "" || !name || !price) {
      return new Response("Algo salió mal", {  status: 400  ,statusText: `Error: Todos los campos son obligatorios`, });
      
    }

    try {
        
      let uid = uuidv4();
      
        await db.insert(Products).values({
            uid,
            name,
            price,
            brandsFk: brandscbx,
            categoriesFk: categoriescbx,
            quantity: 0,
            stock: false,
        })

       return new Response("Producto Creado", { status: 200  });
    } catch (error: any) {
      console.log(error);
      return new Response("Algo salió mal", { status: 400  ,statusText: `Error: ${error.message}`});
    }
  }

    return new Response("Algo salió mal", { status: 400  ,statusText: `Error: `});
};



