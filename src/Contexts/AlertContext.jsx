import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertContextProvider = ({children}) =>{
    
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertText, setAlertText] = useState(null);
    
    const resetAlert = () =>{
        setAlertVisible(false);
        setAlertText(null);
    }
    

    const showAlert = (text) => {
        setAlertVisible(true);
        setAlertText(text);
    }


    const alert = {
        visible: alertVisible,
        text: alertText,
        showAlert: showAlert,
        resetAlert: resetAlert
    }

    return (
        <AlertContext.Provider value= {alert}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlertContext = () => {
    const context = useContext(AlertContext);
    if(!context)
        throw Error("AlertContext used outside of context")
    return context

}

/**
 * This code was used to show and hide the alert by style state, currently not relevant:
 * 
    const [alertStyle, setAlertStyle] = useState({display: "block"})

    const animation_duration_ms = 2000;
    const alert_present_ms = 5000;
    const enterAnimation = `showAlert ${animation_duration_ms}ms forwards`;
    const existAnimation = `hideAlert ${animation_duration_ms}ms forwards`;

    const enterAlertAnimation = () =>{
        setAlertStyle({
            animation: enterAnimation
        })
    }

    const existAlertAnimation = () =>{
        setAlertStyle({
            animation: existAnimation
        })
    }

    const showAlert = (text) => {
        setAlertVisible(true);
        setAlertText(text);
        enterAlertAnimation()
        setTimeout(()=>setAlertText(text), animation_duration_ms*0.1); 
    }

    const hideAlert = () =>{
        console.log("called hide");
        console.log(alertStyle);
        existAlertAnimation();
        console.log("hide alert")
        setTimeout(()=>resetAlert(), animation_duration_ms+animation_duration_ms*0.2)
    }

    const showAndHideAlertInInterval = (text, interval = alert_present_ms) => {
        if(alertVisible)
            return;
        showAlert(text);
        return;
        console.log(`interval is ${interval}`)
        setTimeout(()=>hideAlert(), interval);
    }
 * 
 */