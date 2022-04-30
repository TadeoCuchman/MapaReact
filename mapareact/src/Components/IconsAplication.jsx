import React from 'react';

import {ReactComponent as Share} from '../icons/share.svg'
import {ReactComponent as Save} from '../icons/save.svg'
import {ReactComponent as CloseTo} from '../icons/closeTo.svg'
import {ReactComponent as World} from '../icons/world.svg'
import {ReactComponent as TurnRight} from '../icons/turnRight.svg'



const IconsAplications = (props) => {

    return (
        <>
            <div>
                <button><TurnRight/></button>
                <p>Indications</p>
            </div>
            <div>
                <button><Share/></button>
                <p>Share</p>
            </div>
            <div>
                <button><Save/></button>
                <p>Save</p>
            </div>
            <div>
                <button><CloseTo/></button>
                <p>Close to</p>
            </div>
            <div>
                <button><World/></button>
                <p>Link</p>
            </div>
        </>
    );
}

export default IconsAplications;  