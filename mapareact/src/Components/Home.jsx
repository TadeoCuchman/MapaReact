import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const [state, setState] = useState({
        lat: null,
        lng: null,
    })


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error) =>{
                console.log(error)
            },
            {
                enableHighAccuracy : true
            })
    }, [])

    return (
        <div id='home'>
            <h1>Geolocation</h1>
            <p>latitude: {state.lat}</p>
            <p>longitude: {state.lng}</p>

            {state.lat && state.lng ?
            <Link state={state} to={'/map'}>See My Location</Link> : 
            <Link state={state} to={'/map'}>Enter without Location</Link> 
            }

        </div>
    );
}

export default Home;