import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app  } from "../../../../firebase/server";
import { app as clientApp } from "../../../../firebase/client";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import type { FirebaseApp } from "firebase/app";
import { v4 as uuidv4 } from 'uuid';
export const POST: APIRoute = async ({ request , redirect}) => {
  
  const auth = getAuth(app);
 
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    console.log(body);
    let {  name, price, categoriescbx, brandscbx } = body;
    if (name === "" || price === "" || !name || !price) {
      return new Response("Algo salió mal", {  status: 400  ,statusText: `Error: Todos los campos son obligatorios`, });
      
    }

    try {
        
      let uid = uuidv4();
      const fireStore = getFirestore(clientApp );
      const docuRef = await doc(fireStore, `products/${uid}` );
      await setDoc(docuRef,  {
        uid,
        name,
        price,
        category:categoriescbx,
        brand:brandscbx,
        created_at: new Date().toISOString()
      })

       return redirect("/signin");
    } catch (error: any) {
      console.log(error);
      return new Response("Algo salió mal", { status: 400  ,statusText: `Error: ${error.message}`});
    }
  }

    return new Response("Algo salió mal", { status: 400  ,statusText: `Error: `});
};


export const GET: APIRoute = async ({ request , redirect}) => {
  
  const auth = getAuth(app);
 
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    
 

    try {
        
     
      const fireStore = getFirestore(clientApp );
      const docuRef = await doc(fireStore, `brands` );
     

       return redirect("/signin");
    } catch (error: any) {
      console.log(error);
      return new Response("Algo salió mal", { status: 400  ,statusText: `Error: ${error.message}`});
    }
  }

    return new Response("Algo salió mal", { status: 400  ,statusText: `Error: `});
};
