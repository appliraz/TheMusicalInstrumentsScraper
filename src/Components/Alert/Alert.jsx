import React from "react";
import "../../Styles/Alert.css";
import { useAlertContext } from "../../Contexts/AlertContext";
import CloseAlertButton from "../Buttons/CloseAlertButton";

export default function Alert(){
    
    const alert = useAlertContext();

  
    return(
        alert.visible && (
            <div className="alert_centered" onClick={ alert.resetAlert }>
                <div className="alert-text">
                    <CloseAlertButton/>
                    { alert.text }
                </div>
            </div>
        )
    )

    
}