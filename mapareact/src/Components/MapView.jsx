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
    



    useEffect(() => {
        if(location.state.lat && location.state.lng){
            const  currentLocation = {lat: `${location.state.latitude}` ,lng:`${location.state.longitude}`}
            setState({...state, currentLocation})
        }
 
        chargeLocations()
    },[])

   

    const chargeLocations = async () => {
        try{
            await fetch('https://countrysapi12.herokuapp.com/places', {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    "auth-token" : localStorage.getItem("jwt")
                },
                }).then(response => response.json())
                .then(data => setPlaces(data.places))
        }catch (err) {
            alert('No conexión with Server.')
        }
    }

    return (
        <>
        <Searcher setActivePlace={setActivePlace} activePlace={activePlace}/>
        <MapContainer center = {state.currentLocation} zoom={state.zoom} minZoom={2} >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
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