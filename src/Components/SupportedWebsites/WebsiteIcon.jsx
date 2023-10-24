import React, { useEffect, useState } from "react";
import default_icon from '../../Images/default_img.png';
import { useSupportedWebsites } from "../../Contexts/SupportedWebsContext";
import "../../Styles/SupportedWebsites.css";
import { constants } from "../../AppLogic/constants";



export default function WebsiteIcon({img_src}){
    const [imgSrc, setImgSrc] = useState(null)

    const supportedWebsites = useSupportedWebsites();

    useEffect(()=>{
        let base_64_src = `data: image/png;base64, ${img_src}`
        setImgSrc(base_64_src)
    }, [supportedWebsites])

    const handleImageError = () => {
        setImgSrc(default_icon);
    };

    return (
        <div className = { constants.CSS_CLASS_WEBSITE_CARD_ICON }>
            {
                <img id = { constants.CSS_ID_WEBSITE_CARD_IMG } src = { imgSrc } alt = "web_icon" onError = { handleImageError }/>
            }
            
        </div>
    )           
    
}