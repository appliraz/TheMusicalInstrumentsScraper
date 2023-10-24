import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { checkServer } from '../AppLogic/serverCommunication';
import { useAppBusy } from './AppBusyContext';

const ServerStatusContext = createContext(null);

export const ServerStatusProvider = ({children}) => {
    
    const [serverStatus, setServerStatus] = useState({"ready": false, "message": null})
    const [appBusy, setAppBusy] = useAppBusy();
    
    const updateServerStatus = useCallback(async (isAppBusy)=>{
        if(isAppBusy){
            console.log("app is busy")
            return;
        }
        const response = await checkServer();
        console.log(response.message);
        const status = response
        setServerStatus(status);
        console.log(serverStatus);
    },[checkServer]);

    useEffect(() => {
        updateServerStatus(appBusy) //run on app load
        const intervalId = setInterval(()=>{ updateServerStatus(appBusy)}, 10000 ); //run on every 10 seconds interval
        return () => clearInterval(intervalId);
      }, []);


    return (
        <ServerStatusContext.Provider value={serverStatus}>
            {children}
        </ServerStatusContext.Provider>
    )   

};

export const useServerStatus = () => {
    const context = useContext(ServerStatusContext)
    if(!context)
        throw Error("Server Context used outside of context")
    return context
}
