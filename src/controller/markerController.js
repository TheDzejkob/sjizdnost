import { saveMarker, fetchMarkers } from "../model/markerModel";

export async function addMarker(place, situation, description, user) {
  if (!user) throw new Error("Musíš být přihlášený");

  const geo = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
  const data = await geo.json();

  if (!data[0]) throw new Error("Místo nenalezeno");

  const marker = {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
    situation,
    description,
    userId: user.uid,
    timestamp: Date.now()
  };

  await saveMarker(marker);
  return marker;
}

export async function loadMarkers() {
  return await fetchMarkers();
}