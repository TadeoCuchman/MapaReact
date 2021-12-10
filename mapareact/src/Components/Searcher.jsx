import React from 'react';
import {useEffect} from 'react'

import {ReactComponent as Close} from '../icons/x.svg'
import {ReactComponent as TurnRight} from '../icons/turnRight.svg'
import {ReactComponent as Loup} from '../icons/loup.svg'
import {ReactComponent as Line} from '../icons/line.svg'
import {ReactComponent as Menu} from '../icons/menu.svg'


const Searcher = (props) => {


    return (
        <div className='searcherContainer'>
            <div className='searcher'>
                <button className='searchButtom'><Menu/></button>   
                <input type='text' value={props.search} onChange={(e) =>{
                    setTimeout(() => {
                        const result = props.places.filter((place) => (
                            place.name.toLowerCase().includes(e.target.value.toLowerCase())
                    ))
                        console.log(result)
                    }, 3000); 
                }}/>
                <button className='searchButtom'><Loup/></button>   
                <div className='line'><Line/></div>
                {props.activePlace !== null ? 
                <button className='searchButtom'onClick={() => props.setActivePlace(null)}><Close/></button> :
                <button className='searchButtom'><TurnRight/></button>   
                }
            </div>
        </div>
    );
}

export default Searcher;  