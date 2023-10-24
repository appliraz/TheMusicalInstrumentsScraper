import React from "react";
import WebsiteIcon from "./WebsiteIcon";
import { constants } from "../../AppLogic/constants";
import www_icon from '../../Images/www-icon.png';
import { extractDomain } from "../../AppLogic/utilityFunctions";
import "../../Styles/SupportedWebsites.css";


export default function websiteCard({website}){

    const redirectToWebsite = () => {
        window.open(website[constants.URL_ADDRESS], '_blank');
    };

    return (
        
            <li className = { constants.CSS_CLASS_WEBSITE_CARD } onClick = { redirectToWebsite } tooltip-text = { constants.TOOLTIP_TEXT }>
                <WebsiteIcon img_src = { website[constants.LOGO_SRC] }/>
                <div className = { constants.CSS_CLASS_WEBSITE_LOWER_HALF }>
                    <img id = { constants.CSS_ID_WWW_ICON } src = { www_icon } alt = ""/>
                    <span id = { constants.CSS_ID_WEBSITE_CARD_URL }>{ extractDomain(website[constants.URL_ADDRESS]) }</span>
                </div>
            </li>

    )

}