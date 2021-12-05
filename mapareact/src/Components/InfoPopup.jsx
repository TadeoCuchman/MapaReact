import React from 'react';
import { CSSTransition } from "react-transition-group";

const Home = (props) => {
    const nodeRef = React.useRef(null)

    return (
        <CSSTransition nodeRef={nodeRef} in={true} appear={true} timeout={100} classNames="popUp">
            <div ref={nodeRef} className='InfoPopUp'>
                
                <div className='photo'>

                </div>
                <div className='name'>
                    <h1>{props.name}</h1>

                </div>
                <div className='aplications'>

                </div>
                <div className='description'>
                    <p>{props.description}</p>

                </div>
            </div>
        </CSSTransition>
    );
}

export default Home;