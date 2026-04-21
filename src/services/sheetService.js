// src/services/sheetService.js
export const saveToSheet = async (formElement) => {
    const scriptURL =
    //   'https://script.google.com/macros/s/AKfycbzWritwiQ6I62qK7jEaJZBYx2FwcItAQGxr9QVwJfcKrk2RlTlisTcqF4gs51--bQ/exec'
    'https://script.google.com/macros/s/AKfycbyNQXiT6zth0m6saF42azGJ_VSjlPa8rP4vthpSLu6B3oSBHzK7YgtHCRQHGUeU5qJi/exec'
  
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(formElement)
    })
  
    if (!response.ok) {
      throw new Error('Google Sheet update failed')
    }
  }
  