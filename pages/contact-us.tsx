import React from 'react'
import NavBar from '../components/NavBar'
import { useAccident } from '../context/accidentContext'
const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>

                  
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3j1rU31vVMid4ma_7BIvXnkbE_OrHz7KykpeqLht8HOShxA/viewform?embedded=true" width="1100" height="1500" >Loading…</iframe>
    </div>
  )
}

export default ContactUs
