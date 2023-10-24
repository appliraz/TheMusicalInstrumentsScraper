import React from 'react';
import { constants } from '../../AppLogic/constants';
import '../../Styles/Inputs.css';


export default function InputLabel({label_text}){

    return(
        <label className={ constants.CSS_CLASS_INPUT_LABEL }>{ label_text }</label>
    )
}