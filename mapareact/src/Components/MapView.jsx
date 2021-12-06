import React from 'react'

import {MapContainer, TileLayer} from 'react-leaflet'
import Markers from './Markers'
import 'leaflet/dist/leaflet.css'
import InfoPopup from './InfoPopup'
import Searcher from './Searcher.jsx'

import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const MapView = () => {
    const [places, setPlaces] = useState([])
    const [state, setState] = useState({
        currentLocation:{lat: '-33.90843917823625' ,lng:'-56.19836453854517'},
        zoom:'3'
    })
    const [activePlace, setActivePlace] = useState(null)
    
    const location = useLocation()
    

    console.log(activePlace)


    useEffect(() => {
        //no se porque no funciona esto
        if(location.state.lat){
            const  currentLocation = {lat: `${location.state.latitude}` ,lng:`${location.state.longitude}`}
            setState({
               currentLocation,
                zoom:'8'
            })
            console.log(state)
        }
 
        chargeLocations()
    },[])

   

    const chargeLocations = async () => {
        try{
            await fetch('http://localhost:5000/places', {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    "auth-token" : localStorage.getItem("jwt")
                },
                }).then(response => response.json())
                .then(data => setPlaces(data.places))
        }catch (err) {
            alert('No conexión con Servidor')
        }
    }

    return (
        <>
        <Searcher setActivePlace={setActivePlace} activePlace={activePlace}/>
        <MapContainer center = {state.currentLocation} zoom={state.zoom} minZoom={2}  setMaxBounds={-79.9250244466117, -94.2151848874246} maxBoundsViscosity= {1.0}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            <Markers places={places} location={location.state} setActivePlace={setActivePlace} activePlace={activePlace}/>
        </MapContainer>
        {activePlace !== null && 
        <InfoPopup 
            name={activePlace.name}
            country={activePlace.country} 
            description={activePlace.description} 
            geometry={activePlace.geometry}
            path={activePlace.image.path}
            />}
        </>

    )
}

export default MapView