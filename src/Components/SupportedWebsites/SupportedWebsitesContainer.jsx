import React, { useEffect, useState } from "react";
import { useSupportedWebsites } from "../../Contexts/SupportedWebsContext";
import WebsiteCard from "./WebsiteCard";
import "../../Styles/SupportedWebsites.css";
import { constants } from "../../AppLogic/constants";

export default function SupportedWebsitesContainer(){
    
    const supportedWebsites = useSupportedWebsites();

    const [websites, setWebsites] = useState(null);

    useEffect(()=>{
        if(supportedWebsites === null)
            return;
        setWebsites(Object.entries(supportedWebsites));
    },[supportedWebsites])
    

    return(
        <ul className = { constants.CSS_CLASS_SUPPORTED_WEBSITES_CONTAINER }>
            {!websites ? 
                null : 
                websites.map(([key, website])=>(
                    <WebsiteCard key={key} website={website} />
                )
            )
         }
        </ul>
    )

}

