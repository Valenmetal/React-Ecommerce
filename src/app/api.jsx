import { collection, getDocs, query, doc, getDoc, updateDoc, where, addDoc, /*  setDoc, deleteDoc,*/ } from "firebase/firestore";
import { db } from './firebase';

export const getItemById = async (id) => {
    const colRef = collection(db, 'items');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}
// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'items');
    await updateDoc(doc(colRef, id), obj)
}
export const getCategory = async () => {
    const colRef = collection(db, 'categories');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}
// READ
export const getItems = async () => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef, where('identificator', '==', value)));
    return getArrayFromCollection(result);
}

// CREATE AN ORDER
export const createOrder = async (obj) => {
    const colRef = collection(db, 'orders');
    const data = await addDoc(colRef, obj);
    return data.id;
}

/* 
// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}
*/
const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
} 