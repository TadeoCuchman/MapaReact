import React from 'react';
import {Marker, Popup} from 'react-leaflet'
import {IconLocation, IconCurrentLocation} from '../Components/IconLocation.jsx'


const Markers = (props) => {
    const places = props.places


    return (
        <>
            <Marker
                key={-1}
                name={'My Location'}
                position={props.location} 
                icon={IconCurrentLocation}
                eventHandlers={{ click: () => props.setActivePlace({name: 'My Location', geometry: props.location}) }}/>
                
           {places.map(place => (
               <Marker 
               key={place.name}
               name={place.name}
               position={place.geometry} 
               icon={IconLocation}
               eventHandlers={{ click: () => props.activePlace === place ? props.setActivePlace(null) : props.setActivePlace(place) }} 
               />
           ))}

            <Popup 
            position={props.location} 
            >
                <div>
                    Hello! This is your location!
                </div>
            </Popup>

            
        </>
    );
}

export default Markers;