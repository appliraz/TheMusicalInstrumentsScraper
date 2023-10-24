import React, {createContext, useContext, useState} from "react";

const UserInputsContext = createContext();

export const UserInputsProvider = ({children}) => {

    const [userInputs, setUserInputs] = useState(null)

    return (
        <UserInputsContext.Provider value={[userInputs, setUserInputs]}>
            {children}
        </UserInputsContext.Provider>
    )


}

export const useUserInputs = () =>{
    const context = useContext(UserInputsContext)
    if(!context)
        throw Error("UserInputsContext used outside of context")
    return context
}

