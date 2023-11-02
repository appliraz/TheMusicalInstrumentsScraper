import axios from 'axios';
import { serverExtensions, constants} from './constants';

/** This function supplies a general api call structure service and can be used inside other specific functions */
const makeApiCall = async (endpoint) => {
  return fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      console.log("res not ok");
      console.log(response);
      throw new Error("error with status " + response.statusText);
    }
    return response
  })
    .then(response => { return response.json() })
    .catch((e)=>{
      const res = getServerNoResponseJson(e);
      console.log(res);
      return res})

}



/** This is a function to 'check' the server in his base url and get his message states hes ready */
export const checkServer = async () => {
  console.log("Checking on server");
  let res = {};
  res = await makeApiCall(serverExtensions.server_url);
  return res;
}


/** This function gets the list of the supported websites from the server */
export const fetchSupportedWebsites = async () => {
  console.log("Asking server for supported websites list");
  let res = {};
  res = await makeApiCall(serverExtensions.server_url + serverExtensions.supported_websites);
  return res;
}


/** This function makes a POST request to the server with a list of urls to scrap, the server creates a file in the process */
export const askServerToScrap = async (webs_to_scrap) => {
  console.log("asking server to scrap");
  try{
    //const response =  await axios.post(serverExtensions.server_url + serverExtensions.scrap, { webs_to_scrap })
    const response = await makeApiCall('https://httpbin.org/delay/15');
    console.log("server finished scraping");
    return response
  }
  catch(e){
    console.log("caught an error, passing it up");
    console.log(e);
    throw e;
  }
}


/** This function ask the server for the file that it had created from the inputs */
export const askServerForDownload = async () => {
    console.log("Asking server for a download")
    try {
    const response = await axios({
      headers: { 'Cache-Control': 'no-cache' },
      url: serverExtensions.server_url + serverExtensions.download,
      method: 'GET',
      responseType: 'blob',
    });
    console.log('asked for download, response from server:', response);
    return response;
  } catch (error) {
    console.log('error from server:', error);
    throw error; // re-throw the error so it can be caught by the caller
  }
};

export const serveTheDownload = (file_id) => {
  if(file_id===null){
    console.log("file_id is null")
    throw Error("Null file from server")
  }
  window.location.href = serverExtensions.server_url + serverExtensions.download + "/" + file_id ;
};


function getServerNoResponseJson(err){
  return {"message": constants.SERVER_DOWN_MSG, "ready": false, "error": err.message};
}

