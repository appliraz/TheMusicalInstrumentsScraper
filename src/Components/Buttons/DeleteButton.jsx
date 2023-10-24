import React from 'react';
import {useAppBusy} from '../../Contexts/AppBusyContext';
import { constants } from '../../AppLogic/constants';
import del_icon from '../../Images/del-icon.png';
import '../../Styles/Buttons.css';


export default function DeleteButton({ handleDelete }){

    const [appBusy, setAppBusy] = useAppBusy();

    return (
        <button className = { constants.CSS_ID_DEL_BTN } onClick = { handleDelete } disabled = { appBusy } >
            <img id = { constants.DEL_BTN_ICON_ID } alt = { constants.DELETE_BTN_TEXT } src = { del_icon } />
        </button>
    )
};


