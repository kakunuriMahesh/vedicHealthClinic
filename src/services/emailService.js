// src/services/emailService.js
import emailjs from '@emailjs/browser'
const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)

const SERVICE_ID = VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = VITE_EMAILJS_PUBLIC_KEY

// Throws an error if the public key is missing (to prevent silent failure and show an explicit error)
function validateKeys() {
  if (!SERVICE_ID) {
    throw new Error("EmailJS Service ID is missing. Please set VITE_EMAILJS_SERVICE_ID in your environment variables.")
  }
  if (!TEMPLATE_ID) {
    throw new Error("EmailJS Template ID is missing. Please set VITE_EMAILJS_TEMPLATE_ID in your environment variables.")
  }
  if (!PUBLIC_KEY) {
    throw new Error("EmailJS Public Key is missing. Please set VITE_EMAILJS_PUBLIC_KEY in your environment variables.")
  }
}

export const sendEmail = async (formData) => {
  validateKeys()
  // Fill out all fields you want to send in the template
  return await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    },
    PUBLIC_KEY
  )
}
