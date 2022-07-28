import {useState} from "react";
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';

//function called upon clicking anywhere on the map
const HandleClickMap = () =>{
  const [position, setPosition] = useState(null);
  const map = useMapEvents({ click(e){
    setPosition(e.latlng);
    map.flyTo(e.latlng) // To make animation while moving
    localStorage.setItem("coordinateLat", position.lat);
    localStorage.setItem("coordinateLong", position.lng);
  }})
       
  return position == null ? null : <Marker position={position}></Marker>;
};
    
function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>

      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <HandleClickMap/>

    </MapContainer>
  )
}

export default Map;