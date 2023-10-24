import React from "react";
import { useAlertContext } from "../../Contexts/AlertContext";

export default function CloseAlertButton(){

    const alert = useAlertContext();

    return(
        <button onClick = {alert.resetAlert} className = "close-alert-btn"/>
    )

}