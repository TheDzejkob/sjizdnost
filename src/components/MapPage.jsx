import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Panel from './Panel'
export default function MapPage(){
 const [markers,setMarkers]=useState([])
 return (<div style={{display:'flex',height:'100vh'}}>
 <Panel setMarkers={setMarkers}/>
 <MapContainer center={[49.8,15.5]} zoom={7} style={{flex:1}}>
 <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
 {markers.map((m,i)=>(<Marker key={i} position={[m.lat,m.lng]}>
 <Popup><b>{m.situation}</b><br/>{m.description}</Popup>
 </Marker>))}
 </MapContainer></div>)
}
