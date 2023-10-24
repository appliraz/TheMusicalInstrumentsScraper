import React from "react"
import { constants } from "../AppLogic/constants"

export default function DescriptionField(){
    return (
        <span id = { constants.CSS_ID_DESCRIPTION_FIELD }>{ constants.APP_DESCRIPTION }</span>
    )
}