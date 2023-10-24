import React from 'react';
import './Styles/App.css'
import SupportedWebsitesContainer from './Components/SupportedWebsites/SupportedWebsitesContainer';
import AppContextProvider from './Contexts/AppContextProvider';
import MainAppLayout from './Components/MainAppLayout';
import Alert from './Components/Alert/Alert';


function App(){
  
  return(
    <div className="app">
      <AppContextProvider>
        <Alert />
        <MainAppLayout />
        <SupportedWebsitesContainer />
      </AppContextProvider>
    </div>
  );
}



export default App;



