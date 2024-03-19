import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app  } from "../../../firebase/server";
import { app as clientApp } from "../../../firebase/client";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import type { FirebaseApp } from "firebase/app";

export const POST: APIRoute = async ({ request, redirect }) => {
  
  const auth = getAuth(app);
 
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    let { email, password, name } = body;
    try {
      const resUsuario =await  auth.createUser({
        email,
        password,
        displayName: name,
      }).then(
        (userRecord) => {
         return userRecord
        }
      )

      const fireStore = getFirestore(clientApp );
      const docuRef = await doc(fireStore, `users/${resUsuario.uid}` );
      await setDoc(docuRef,  {
        uid:resUsuario.uid,
        email,
        name,
        role: "user"      
      })

      return redirect("/signin");
    } catch (error: any) {
      console.log(error);
      return new Response("Algo salió mal", { status: 400  ,statusText: `Error: ${error.message}`});
    }
  }

  return redirect("/signin");
};
