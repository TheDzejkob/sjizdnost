import { db } from "../../firebase/firebase";
import { ref, push, get } from "firebase/database";

export async function saveMarker(marker) {
  await push(ref(db, "markers"), marker);
}

export async function fetchMarkers() {
  const snapshot = await get(ref(db, "markers"));
  if (!snapshot.exists()) return [];
  return Object.values(snapshot.val());
}