import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
export default function Panel({setMarkers}){
 async function add(){
 const place=prompt('Místo'); if(!place)return;
 const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
 const d=await r.json(); if(!d[0])return alert('Nenalezeno');
 const s=prompt('Situace'); if(!s)return;
 const p=prompt('Popis'); if(!p)return;
 setMarkers(m=>[...m,{lat:d[0].lat,lng:d[0].lon,situation:s,description:p}])
 }
 return <div style={{width:260,padding:20,background:'#eee'}}>
 <button onClick={add}>Přidat bod</button></div>
}
