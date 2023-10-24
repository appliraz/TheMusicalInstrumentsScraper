import { createContext, useContext, useState} from "react";

const AppBusyContext = createContext();

export const AppBusyProvider = ({children}) => {
    
    const [appBusy, setAppBusy] = useState(false);


    return(
        <AppBusyContext.Provider value={[appBusy, setAppBusy]}>
            {children}
        </AppBusyContext.Provider>
    )
}

export const useAppBusy = () => {
    const context = useContext(AppBusyContext)
    if(!context)
        throw Error("AppBusyContext used outside of context")
    return context
}

export default useAppBusy;
