import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetEvents = () => {
  const [events, setEvents] = useState([]);
  const eventCollectionRef = collection(db, "events");
  const { userID } = useGetUserInfo();

  const getEvents = async () =>{
    let unsubscribe;
    try {
      const queryEvents = query(
        eventCollectionRef,
      where("userID", "==", userID),
      orderBy("createdAt")
      );
      unsubscribe = onSnapshot(queryEvents, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });

        setEvents(docs);
      });
    } catch(err){
      console.error(err);
    }
    return () => unsubscribe();
  };

  useEffect(() => {
    getEvents();
  }, [])
  return {events}
}