import React from "react";
import useAppBusy from "../../Contexts/AppBusyContext";
import { constants } from "../../AppLogic/constants";
import '../../Styles/Inputs.css';



export default function InputField({input, handleChange, handleBlur}){
    
    const [appBusy, setAppBusy] = useAppBusy();

    return(
        <input className = { constants.CSS_CLASS_INPUT_FIELD } placeholder = " " value={input} disabled = {appBusy} onChange={handleChange} onBlur={handleBlur}/>
    )
}