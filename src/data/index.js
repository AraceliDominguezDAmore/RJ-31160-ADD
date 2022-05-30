import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs, Timestamp, addDoc } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAvyHEngRx47HuymtMH_dRfnFxnUGQWzFI",
  authDomain: "reactdisqueria.firebaseapp.com",
  projectId: "reactdisqueria",
  storageBucket: "reactdisqueria.appspot.com",
  messagingSenderId: "495101454466",
  appId: "1:495101454466:web:133e5bd3de81d431a1ec9b",
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

//obtener todos lod items
export async function getAllItems() {
    const miColec = collection (firestoreDB, 'productos')
    const productosSnap = await getDocs (miColec);

    return productosSnap.docs.map (doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

//obtener todos los items de una categoria
export async function getItemsByCategory(categoryid) {
    const miColec = collection (firestoreDB, 'productos')
    const queryProducto = query (miColec, where("banda", "==", categoryid))

    const productosSnap = await getDocs (queryProducto);

    return productosSnap.docs.map (doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

//obtener un solo item
export async function getItem(id) {
    const miColec = collection (firestoreDB, 'productos')
    const productoRef = doc (miColec, id)
    const productoSnap = await getDoc(productoRef);

    return{
        ...productoSnap.data(),
        id: productoSnap.id
    }
}

//Orden de compra
export async function createBuyOrder (orderData){
    const buyTimestamp = Timestamp.now();

    const orderWithDate = { 
        ...orderData, 
        date: buyTimestamp 
    };
    
    const miColec = collection (firestoreDB, "buyOrders");
    const orderDoc = await addDoc (miColec, orderWithDate);

    alert("Gracias por tu compra! Tu codigo de seguimiento es: " + orderDoc.id);
}