export const constants = {
    //app related
    APP_TITLE: "Musical Instruments Scraper",
    LABEL_PROMPT: "Enter URL",
    LABEL_URL_UNSUPPORTED: "Not Supported",
    TOOLTIP_TEXT: "Open in new tab",

    //css classes and ids
    CSS_ID_DEL_BTN: "del-btn",
    CSS_ID_ADD_BTN: "add-btn",
    CSS_ID_SUBMIT_BTN: "submit-btn",
    DEL_BTN_ICON_ID: "del_btn_icon",
    CSS_CLASS_INPUT_FIELD: "input",
    CSS_ID_INPUT_COMPONENT: "field",
    CSS_CLASS_INPUT_LABEL: "label",
    CSS_CLASS_INPUTS_LIST: "inputs_list",
    CSS_CLASS_SUPPORTED_WEBSITES_CONTAINER: "websites_cards_container",
    CSS_CLASS_WEBSITE_CARD: "website_card",
    CSS_CLASS_WEBSITE_LOWER_HALF: "card_lower_half",
    CSS_ID_WWW_ICON: "www_icon_img",
    CSS_ID_WEBSITE_CARD_URL: "website_url",
    CSS_CLASS_WEBSITE_CARD_ICON: "website_icon",
    CSS_ID_WEBSITE_CARD_IMG: "website_icon_img",
    CSS_ID_DESCRIPTION_FIELD: "description",
    CSS_CLASS_MAIN_APP_CONTAINER: "main_app_container",
    CSS_ID_SERVER_MESSAGE: "server_message",


    //buttons
    DELETE_BTN_TEXT: "Delete",
    ADD_BTN_TEXT: "+ Add Field",
    SCRAP_BTN_TEXT: "Scrap",
    BTN_DEFAULT_TEXT: "I'm a button",
    BTN_DISABLED_DEFAULT_TEXT: "On it..",

    //messages and error variables,
    SERVER_DOWN_MSG: "The Server is Down... Try Later",
    NO_SUPPORTED_WEBSITES_ERROR: "There are no supported websites to scrap, try to add some valid URLs and make sure the server is up",
    APP_GENERAL_ERROR_MSG: "an error occured, try again",
    APP_DESCRIPTION: "Enter URLs of category pages with products from the supported musical instruments websites, and the Musical Instruments Scraper will scrap them for you onto Excel",

    //supported websites paramteres
    URL_ADDRESS: "address",
    EN_NAME: "english_name",
    HE_NAME: "hebrew_name",
    LOGO_SRC: "img_src"

}   


export const serverExtensions = {
    server_url: "http://127.0.0.1:5000/",
    download: "download",
    scrap: "scrap",
    supported_websites: "websites"
}
