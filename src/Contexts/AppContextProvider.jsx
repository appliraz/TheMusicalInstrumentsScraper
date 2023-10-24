import { ServerStatusProvider } from "./ServerStatusContext"
import { SupportedWebsitesProvider } from "./SupportedWebsContext"
import { AppBusyProvider } from "./AppBusyContext"
import { UserInputsProvider } from "./UserInputsContext"
import { AlertContextProvider } from "./AlertContext"


const AppContextProvider = ({children}) => {
    return (
        <AppBusyProvider>
            <AlertContextProvider>
                <ServerStatusProvider>
                    <UserInputsProvider>
                        <SupportedWebsitesProvider>
                            {children}
                        </SupportedWebsitesProvider>
                    </UserInputsProvider>
                </ServerStatusProvider>
            </AlertContextProvider>
        </AppBusyProvider>

    )
}

export default AppContextProvider;