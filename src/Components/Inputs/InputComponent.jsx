import React from "react";
import InputField from "./InputField";
import InputLabel from "./InputLabel";
import { constants } from "../../AppLogic/constants";
import {useSupportedWebsites} from "../../Contexts/SupportedWebsContext";
import DeleteButton from "../Buttons/DeleteButton";
import '../../Styles/Inputs.css';



export default function InputComponent({props}){

 const {key, value, handleDelete, handleChange, handleBlur} = props;
    
  const supportedWebsites = useSupportedWebsites();
    
  const getLabel = (url) => {
        if(!url)
          return constants.LABEL_PROMPT;
        const url_address = constants.URL_ADDRESS;
        const website_name = constants.EN_NAME; //use EN_NAME for name in English, alternative option is HE_NAME for Hebrew name
        for(const website_key in supportedWebsites){
          let website_url = supportedWebsites[website_key][url_address]
          if(inputContainsDomain(url, website_url))
            return supportedWebsites[website_key][website_name]
        }
        return constants.LABEL_URL_UNSUPPORTED;
  }

  const cleanUpUrl = (url) => {
    url = url.replace('https://www.','');
    url = url.slice(0, -1);
    return url
  }

  const inputContainsDomain = (input, domain) => {
    domain = cleanUpUrl(domain)
    return input.toLowerCase().includes(domain.toLowerCase())
  }

  return(
    <div id = { constants.CSS_ID_INPUT_COMPONENT } key = { key }>
        <InputField input= { value } handleChange={ (e)=>handleChange(e, key) } handleBlur={ handleBlur }/>
        <InputLabel label_text = { getLabel(value) } />
        <DeleteButton handleDelete = { (e)=>handleDelete(e, key) } />
    </div>
    )
}