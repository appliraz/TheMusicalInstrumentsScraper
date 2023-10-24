export const getFilename = () => {
    let filename = "file";
    try{
      const currenttime = new Date();
      filename = "MusicalInstrumentsScraper " + currenttime.toLocaleString();
    } 
    catch(e){
      console.log(e);
    }
    return filename + ".xlsx"
};