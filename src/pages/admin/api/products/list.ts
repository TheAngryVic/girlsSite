import type { APIRoute } from "astro";
import { getFirestore, doc, getDocs, collection  } from "firebase/firestore";



export const GET: APIRoute = async ({ params }) => {
    

    const db = getFirestore();
    try {

        let query = await getDocs(collection(db, 'brands'))
        console.log(query);
         return new Response(
            null, 
            {
              status: 200,
              headers: {
                "Content-Type": "application/json"
              }
            }
          ); 


    } catch (error) {
        return new Response(
            null, 
            {
              status: 200,
              headers: {
                "Content-Type": "application/json"
              }
            }
          );     
    } 
    return new Response(
        null, {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      ); 

}
