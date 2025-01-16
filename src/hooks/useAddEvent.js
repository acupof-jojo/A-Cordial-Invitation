import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddEvent = () => {
    const eventCollectionRef = collection(db, "events");
    const { userID } = useGetUserInfo();
    const addEvent = async ({
        eventName,
        description,
        location,
        attire,
        theme,
        specialNotes
    }) => {
      await addDoc(eventCollectionRef, {
        userID,
        eventName,
        description,
        location,
        attire,
        theme,
        specialNotes,
        createdAt: serverTimestamp(),
      });
    };
    return { addEvent };
  };