import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const setItem = async (id, item) => {
  if (item.image instanceof File) {
    const path = `images/${item.image.name}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, item.image);
    const dowlnloadURL = await getDownloadURL(storageRef);
    item.image = dowlnloadURL;
    item.path = path;
  }
  const file = doc(db, "items", id);
  await setDoc(file, item);
};
