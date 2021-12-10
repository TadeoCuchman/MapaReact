import React from 'react';
import { CSSTransition } from "react-transition-group";

import IconsAplication from './IconsAplication'

const InfoPopUp = (props) => {
    const nodeRef = React.useRef(null)

    return (
        <CSSTransition nodeRef={nodeRef} in={true} appear={true} timeout={100} classNames="popUp">
            <div ref={nodeRef} className='InfoPopUp'>
                
                <div className='photo'>
                    {props.path !== null &&
                    <img className='image' src={`${props.path}`} alt={`city of ${props.name}`} />}
                </div>
                <div className='name'>
                    <h2>{props.name}</h2>
                    <h5>{props.country}</h5>

                </div>
                <div className='aplications'>
                    <IconsAplication/>
                </div>
                <div className='description'>
                    <h4>Basic Data:</h4>
                    <p>{props.description}</p>

                </div>
                <div className='photos'>
                    <h3>Fotos:</h3>
                </div>
            </div>
        </CSSTransition>
    );
}

export default InfoPopUp;