import { defineStore } from 'pinia'
import { query, collection, getDocs, where } from "firebase/firestore/lite";
import { auth, db } from '../FirebaseConfig';

export const useDataBase = defineStore(`DataBase`, {
    state: () => ({
        documents: [],
        loadingDoc: false
    }),
    actions: {
        async getUrls(){
            try {
                this.loadingDoc = true
                // con collection se refiere a lo que esta en firebase. y que entre a la db de urls
                //
                const q = query(collection(db, 'urls'), where("user", "==", auth.currentUser.uid))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    // de mi coleccion, que muestre los datos. ademas, que empuje esos datos al document
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingDoc = false
            }
        }
    }
})

// opcion 1
// state: () => {
//     return {

//     }
// }


// auth.reloadUserInfo.localId
