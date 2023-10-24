import UIButton from "./UIButton";
import Spinner from "../Spinner/Spinner";
import { useSupportedWebsites } from "../../Contexts/SupportedWebsContext";
import useAppBusy from "../../Contexts/AppBusyContext";
import { useUserInputs } from "../../Contexts/UserInputsContext";
import { constants } from "../../AppLogic/constants";
import { extractDomain } from "../../AppLogic/utilityFunctions";
import { askServerToScrap, serveTheDownload } from "../../AppLogic/serverCommunication";
import { useAlertContext } from "../../Contexts/AlertContext";
import '../../Styles/Buttons.css';



export default function SubmitButton(){

    const supportedWebsites = useSupportedWebsites();
    const [appBusy, setAppBusy] = useAppBusy();
    const [userInputs, setUserInputs] = useUserInputs();
    const alert = useAlertContext(); 

    const isValidInput = (input) => {
        console.log(input)
        if(!supportedWebsites)
          return false;
        for(const website_key in supportedWebsites){
          let website = supportedWebsites[website_key]['address']
          if(input.toLowerCase().includes(extractDomain(website)))
            return true
        }
        return false
    }

    const stopIfNoInputs = () => {
      if(userInputs === null){
        alert.showAlert(constants.NO_SUPPORTED_WEBSITES_ERROR);
        setAppBusy(false);
        throw Error("user inputs is null");
      }
    }

    const stopIfNoValidInputs = (validInputs) => {
      if(!validInputs){
        alert.showAlert(constants.NO_SUPPORTED_WEBSITES_ERROR);
        setAppBusy(false);
        throw Error("no valid inputs");
      }
    }

    const getValidInputs = () => {
      const inputValues = userInputs.map(input=> input.value);
      const validInputs = inputValues.filter((input)=> supportedWebsites && isValidInput(input));
      return validInputs
    }

    const handleError = (error) => {
      let message = "unknown"
      if(error.message)
        message = error.message
      alert.showAlert("Process was not successful because of error:\n" + message)
      setAppBusy(false);
    }

    const submitValidInputs = async (validInputs) => {
      try{
        let response = await askServerToScrap(validInputs);
        if(response.error || response instanceof Error){
          let err = "Server returned an error:\n" + response.error ? response.error : response.message;
          alert.showAlert(err);
          setAppBusy(false);
          return;
        }
        console.log("came back from scraping")
        console.log(response)
        let file_id = response.data.file_id;
        serveTheDownload(file_id);
      }
      catch(error){
        console.log("caught an error from askServerToScrap");
        console.log(error);
        handleError(error);
      }
    }

    const handleSubmit = async () => {
      console.log("HANDLE SUBMIT");
      setAppBusy(true); 
      try {
        stopIfNoInputs();
        const validInputs = getValidInputs();
        stopIfNoValidInputs(validInputs);
        await submitValidInputs(validInputs); 
        setAppBusy(false);
      } 
      catch (error) {
        handleError(error)
      }
    };

    return (
        <UIButton styleId = { constants.CSS_ID_SUBMIT_BTN } handleClick = { handleSubmit } buttonText = { constants.SCRAP_BTN_TEXT } disabledText={<Spinner/>}/> 
    )

}



