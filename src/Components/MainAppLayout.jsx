
import React from "react"
import ServerMessage from "./ServerMessage"
import DescriptionField from "./DescriptionField"
import InputsList from "./Inputs/InputsList"
import SubmitButton from "./Buttons/SumbitButton"
import { constants } from "../AppLogic/constants"


const MainAppLayout = () => {


    return(
        <div className = { constants.CSS_CLASS_MAIN_APP_CONTAINER } >
            <ServerMessage />
            <DescriptionField />
            <InputsList />
            <SubmitButton />
        </div>

    )
}

export default MainAppLayout;