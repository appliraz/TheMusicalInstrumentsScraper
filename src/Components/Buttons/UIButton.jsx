import React from 'react';
import useAppBusy from '../../Contexts/AppBusyContext';
import { constants } from '../../AppLogic/constants';
import '../../Styles/Buttons.css';

export default function UIButton({styleId, handleClick, disabledText= constants.BTN_DISABLED_DEFAULT_TEXT, buttonText=constants.BTN_DEFAULT_TEXT, img_src= null}){

    const [appBusy, setAppBusy] = useAppBusy();

    return( 
        <button id = { styleId } disabled = { appBusy } onClick = { handleClick }>
            { appBusy ? disabledText : buttonText }
            <img src = { img_src }/>
        </button>
    )

};

