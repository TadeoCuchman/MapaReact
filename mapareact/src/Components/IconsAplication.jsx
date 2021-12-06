import React from 'react';

import {ReactComponent as Share} from '../icons/share.svg'
import {ReactComponent as Save} from '../icons/save.svg'
import {ReactComponent as CloseTo} from '../icons/closeTo.svg'
import {ReactComponent as World} from '../icons/world.svg'
import {ReactComponent as TurnRight} from '../icons/turnRight.svg'



const IconsAplications = (props) => {

    return (
        <>
            <>
                <button><TurnRight/></button>
                <span>Indications</span>
            </>
            <>
                <button><Share/></button>
                <span>Share</span>
            </>
                <button><Save/></button>
                <span>Save</span>
            <>
                <button><CloseTo/></button>
                <span>Close to:</span>
            </>
            <>
                <button><World/></button>
                <span>Link</span>
            </>
        </>
    );
}

export default IconsAplications;  