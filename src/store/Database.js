import { defineStore } from 'pinia'
import { query, collection, getDocs } from "firebase/firestore/lite";
import { auth, db } from '../FirebaseConfig';

export const useDataBase = defineStore(`DataBase`, {
    state: () => ({
        documents: []
    }),
    actions: {
        async getUrls(){
            try {
                // con collection se refiere a lo que esta en firebase. y que entre a la db de urls
                //
                const q = query(collection(db, 'urls'), where("user", "==", auth.currentUser))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // de mi coleccion, que muestre los datos
                    console.log(doc.id, doc.data());
                })
            } catch (error) {
                console.log(error);
            } finally {

            }
        }
    }
})

// opcion 1
// state: () => {
//     return {

//     }
// }
