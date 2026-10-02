window.DivyatraComponents = window.DivyatraComponents || {};

window.DivyatraComponents.settingsUI = {
  updateSettingsLanguage() {
    const settingsTitle = document.getElementById("settingsTitle");
    const autoRotateName = document.getElementById("autoRotateName");
    const autoRotateDescription = document.getElementById("autoRotateDescription");
    const fullscreenName = document.getElementById("fullscreenName");
    const fullscreenDescription = document.getElementById("fullscreenDescription");
    const arPlacementName = document.getElementById("arPlacementName");
    const arPlacementDescription = document.getElementById("arPlacementDescription");
    const resetViewName = document.getElementById("resetViewName");
    const resetViewDescription = document.getElementById("resetViewDescription");
    const resetViewButton = document.getElementById("resetViewButton");
    const settingsClose = document.getElementById("settingsClose");
    const languageButton = document.getElementById("languageButton");
    const musicButton = document.getElementById("musicButton");
    const settingsButton = document.getElementById("settingsButton");
    const templeBellButton = document.getElementById("templeBellButton");
    const templeBellText = document.getElementById("templeBellText");
    const fastBellButton = document.getElementById("fastBellButton");
    const fastBellText = document.getElementById("fastBellText");
    const shankhButton = document.getElementById("shankhButton");
    const shankhText = document.getElementById("shankhText");
    const virtualDiyaText = document.getElementById("virtualDiyaText");
    const virtualDiyaButton = document.getElementById("virtualDiyaButton");
    const flowerOfferingText = document.getElementById("flowerOfferingText");
    const flowerOfferingButton = document.getElementById("flowerOfferingButton");

    const currentLanguage = document.documentElement.lang === "hi" ? "hi" : "en";

    if (currentLanguage === "hi") {
      settingsTitle.textContent = "सेटिंग्स";
      autoRotateName.textContent = "ऑटो रोटेट";
      autoRotateDescription.textContent = "दिव्य मॉडल को स्वचालित रूप से घुमाएं";
      fullscreenName.textContent = "फुलस्क्रीन";
      fullscreenDescription.textContent = "दिव्य अनुभव को फुलस्क्रीन में देखें";
      arPlacementName.textContent = "एआर में रखें";
      arPlacementDescription.textContent = window.arSession
        ? "जगह खोजने के लिए डिवाइस घुमाएँ, फिर टैप करें"
        : "चयनित देवता को अपने स्थान में रखें";
      resetViewName.textContent = "व्यू रीसेट करें";
      resetViewDescription.textContent = "मॉडल और कैमरा को डिफ़ॉल्ट व्यू पर रीसेट करें";
      resetViewButton.setAttribute("aria-label", "व्यू रीसेट करें");
      resetViewButton.setAttribute("title", "व्यू रीसेट करें");
      settingsClose.setAttribute("aria-label", "सेटिंग्स बंद करें");
      settingsClose.setAttribute("title", "सेटिंग्स बंद करें");
      languageButton.setAttribute("title", "भाषा बदलें");
      musicButton.setAttribute("aria-label", "भजन चलाएं या रोकें");
      musicButton.setAttribute("title", "भजन");
      settingsButton.setAttribute("aria-label", "सेटिंग्स खोलें");
      settingsButton.setAttribute("title", "सेटिंग्स");
      templeBellButton.setAttribute("aria-label", "मंदिर की घंटी");
      templeBellButton.setAttribute("title", "मंदिर की घंटी");
      templeBellText.textContent = "मंदिर की घंटी";
      fastBellButton.setAttribute("aria-label", "गरुड़ घंटी");
      fastBellButton.setAttribute("title", "गरुड़ घंटी");
      fastBellText.textContent = "तेज़ मंदिर की घंटी";
      shankhButton.setAttribute("aria-label", "शंख");
      shankhButton.setAttribute("title", "शंख");
      shankhText.textContent = "शंख";
      virtualDiyaText.textContent = "दीपक अर्पित करें";
      virtualDiyaButton.setAttribute("aria-label", "दीपक अर्पित करें");
      virtualDiyaButton.setAttribute("title", "दीपक अर्पित करें");
      flowerOfferingText.textContent = "फूल अर्पित करें";
      flowerOfferingButton.setAttribute("aria-label", "फूल अर्पित करें");
      flowerOfferingButton.setAttribute("title", "फूल अर्पित करें");
    } else {
      settingsTitle.textContent = "Settings";
      autoRotateName.textContent = "Auto Rotate";
      autoRotateDescription.textContent = "Rotate the divine model automatically";
      fullscreenName.textContent = "Fullscreen";
      fullscreenDescription.textContent = "View the divine experience in fullscreen";
      arPlacementName.textContent = "AR Placement";
      arPlacementDescription.textContent = window.arSession
        ? "Move to scan a surface, then tap to place"
        : "Place the selected deity in your space";
      resetViewName.textContent = "Reset View";
      resetViewDescription.textContent = "Reset the model and camera to the default view";
      resetViewButton.setAttribute("aria-label", "Reset View");
      resetViewButton.setAttribute("title", "Reset View");
      settingsClose.setAttribute("aria-label", "Close settings");
      settingsClose.setAttribute("title", "Close settings");
      languageButton.setAttribute("aria-label", "Switch language");
      languageButton.setAttribute("title", "Switch Language");
      musicButton.setAttribute("aria-label", "Toggle Chanting");
      musicButton.setAttribute("title", "Chanting");
      settingsButton.setAttribute("aria-label", "Open settings");
      settingsButton.setAttribute("title", "Settings");
      templeBellButton.setAttribute("aria-label", "Temple Bell");
      templeBellButton.setAttribute("title", "Temple Bell");
      templeBellText.textContent = "Temple Bell";
      fastBellButton.setAttribute("aria-label", "Pooja Bell");
      fastBellButton.setAttribute("title", "Pooja Bell");
      fastBellText.textContent = "Pooja Bell";
      shankhButton.setAttribute("aria-label", "Shankh Sound");
      shankhButton.setAttribute("title", "Shankh");
      shankhText.textContent = "Shankh";
      virtualDiyaText.textContent = "Offer Virtual Diya";
      virtualDiyaButton.setAttribute("aria-label", "Offer Diya");
      virtualDiyaButton.setAttribute("title", "Offer Diya");
      flowerOfferingText.textContent = "Offer Flowers";
      flowerOfferingButton.setAttribute("aria-label", "Offer Flowers");
      flowerOfferingButton.setAttribute("title", "Offer Flowers");
    }
  },
};
