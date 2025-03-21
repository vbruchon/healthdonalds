import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getItems = async () => {
  const itemsCollection = collection(db, "items");
  const itemsResult = await getDocs(itemsCollection);
  const data = [];

  itemsResult.forEach((item) => {
    data.push({
      id: item.id,
      ...item.data(),
    });
  });
  return data;
};
