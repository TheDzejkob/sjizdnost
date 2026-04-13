import React, { useEffect, useState } from "react";
import MapView from "./view/MapView";
import MarkerPanelView from "./view/MarkerPanelView";
import { addMarker, loadMarkers } from "./controller/markerController";
import { useAuth } from "./auth/AuthContext";

export default function App() {
  const [markers, setMarkers] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    loadMarkers().then(setMarkers);
  }, []);

  const handleAdd = async (place, situation, description) => {
    try {
      const marker = await addMarker(place, situation, description, currentUser);
      setMarkers(prev => [...prev, marker]);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
   <div style={{ display: "flex", height: "100vh" }}>
  
  <div style={{ 
    width: "300px", 
    zIndex: 1000, 
    background: "#eee",
    position: "relative"
  }}>
    <MarkerPanelView onAdd={handleAdd} user={currentUser} />
  </div>

  <div style={{ flex: 1 }}>
    <MapView markers={markers} />
  </div>

</div>
  );
}