import { useEffect } from "react";

export const useEffect_funcInInterval = (func, interval) =>{
    useEffect(() => {
        func();
        const intervalId = setInterval(func, interval);
        return () => clearInterval(intervalId);
      }, [func, interval]);
}

export function extractDomain(url) {
    if(!url)
      return ""
    console.log("EXTRACT");
    let re = /^(https?:\/\/)?(www\.)?/
    let domain = url.replace(re, '');

    const slashIndex = domain.indexOf('/');
    if (slashIndex !== -1) {
      domain = domain.substring(0, slashIndex);
    }
    const colonIndex = domain.indexOf(':');
    if (colonIndex !== -1) {
      domain = domain.substring(0, colonIndex);
    }
    return domain;
  }
