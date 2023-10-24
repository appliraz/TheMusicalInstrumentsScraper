import React, { useState, useEffect} from 'react';
import { useServerStatus } from '../Contexts/ServerStatusContext';
import { constants } from '../AppLogic/constants';


export default function ServerMessage(){
    
    const [serverMessage, setServerMessage] = useState("");

    const serverStatus = useServerStatus();

    useEffect(()=>{
        serverStatus.ready ? setServerMessage(serverStatus.message) : setServerMessage(constants.SERVER_DOWN_MSG)
    },[serverStatus])

    return <h1 id = { constants.CSS_ID_SERVER_MESSAGE }>{ serverMessage ? serverMessage : null }</h1>
}

