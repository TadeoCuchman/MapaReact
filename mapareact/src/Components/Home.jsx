import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const [state, setState] = useState({
        lat: 0,
        lng: 0,
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
        <div>
            <h1>Geolocation</h1>
            <p>latitude: {state.lat}</p>
            <p>longitude: {state.lng}</p>

            <Link state={state} to={'/map'}>See My Location</Link>
        </div>
    );
}

export default Home;