import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export interface GuestbookEntry {
  id: string;
  author: string;
  location: string;
  message: string;
  createdAt: Date;
}

export async function addGuestbookEntry(data: {
  author: string;
  location: string;
  message: string;
}) {
  await addDoc(collection(db, "guestbook"), {
    author: data.author,
    location: data.location,
    message: data.message,
    createdAt: serverTimestamp(),
  });
}

export async function getRecentEntries(n: number): Promise<GuestbookEntry[]> {
  try {
    const q = query(
      collection(db, "guestbook"),
      orderBy("createdAt", "desc"),
      limit(n)
    );
    const snap = await getDocs(q);
    return snap.docs.map((doc) => {
      const d = doc.data();
      const ts = d.createdAt as Timestamp | null;
      return {
        id: doc.id,
        author: d.author ?? "",
        location: d.location ?? "",
        message: d.message ?? "",
        createdAt: ts ? ts.toDate() : new Date(),
      };
    });
  } catch {
    return [];
  }
}
