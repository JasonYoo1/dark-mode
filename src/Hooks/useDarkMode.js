import React, { useState, useEffect } from "react";
import {useLocalStorage} from './useLocalStorage'


const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("false");
    // console.log(darkMode)
  
  
    useEffect( () =>  {
        //if state is true then do next step
    if (darkMode === "true") {
      document.querySelector("body").classList.add("dark-mode")
      // added "dark-mode" css styling to variable backgroundColor
      //logged for sanity check
      console.log("dark is true")
    }
    else {
    //set body to variable backgroundColor so I could grab the whole thing.
    document.querySelector("body").classList.remove("dark-mode")
     // added "dark-mode" css styling to variable backgroundColor
      console.log("dark is not true")
      //logged for sanity check
  
    }

    },[darkMode])
    
    return[darkMode,  setDarkMode]
};

    export default useDarkMode;