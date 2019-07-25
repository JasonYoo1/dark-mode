import React, { useState, useEffect } from "react";
import {useLocalStorage} from './useLocalStorage'


export const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage("false");
    console.log(dark)
  
  
    useEffect( () =>  {
    if (dark == 'true') {
      var backgroundColor = document.querySelector("body")
      console.log("dark is true")
      backgroundColor.classList.add("dark-mode")
    }
    else {
     var backgroundColor = document.querySelector("body")
      console.log("dark is not true")
      backgroundColor.classList.remove("dark-mode")
  
    }
      return(dark,  setDark)
      
    }, [dark])};