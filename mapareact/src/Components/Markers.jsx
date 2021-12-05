import React from 'react';
import {Marker, Popup} from 'react-leaflet'
import {IconLocation, IconCurrentLocation} from '../Components/IconLocation.jsx'


const Markers = (props) => {
    const places = props.places

    console.log(props.activePlace)


    return (
        <>
            <Marker
                key={-1}
                name={'My Location'}
                position={props.location} 
                icon={IconCurrentLocation}/>
                
           {places.map(place => (
               <Marker 
               key={place.name}
               name={place.name}
               position={place.geometry} 
               icon={IconLocation}
               eventHandlers={{ click: () => props.activePlace ? null :props.setActivePlace(place) }} 
               />
           ))}

            <Popup position={props.location} >
                <div>
                    Hello! This is your location!
                </div>
            </Popup>

            
        </>
    );
}

export default Markers;