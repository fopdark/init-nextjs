"use client";

import React, { useEffect } from "react";

var double = 0;

function GoogleTranslate() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    console.log("google_translate_element")
    if(double > 0) {
        return
    }
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    double++
  }, []);
  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;
