import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchSupportedWebsites } from '../AppLogic/serverCommunication';
import { useServerStatus } from './ServerStatusContext';

const SupportedWebsContext = createContext();

export const SupportedWebsitesProvider = ({ children }) => {
    const [supportedWebsites, setSupportedWebsites] = useState(null);

    const serverStatus = useServerStatus();

    const updateSupportedWebsites = useCallback(async ()=>{
        const response = await fetchSupportedWebsites();
        console.log(response);
        if(response.ready)
          setSupportedWebsites(response.data);
      }, []);

  
    useEffect(() => {
      if(serverStatus.ready && supportedWebsites===null)
        updateSupportedWebsites();
    }, [serverStatus]);
  

  
    return (
      <SupportedWebsContext.Provider value={supportedWebsites}>
        {children}
      </SupportedWebsContext.Provider>
    );
};

export const useSupportedWebsites = () => {
    const context = useContext(SupportedWebsContext);
    return context;
};


