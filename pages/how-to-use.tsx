import React from "react"
import NavBar from "../components/NavBar"
const HowToUse = () => {


    return (
        <div>
            <NavBar />
            <h1 style={{ textAlign: 'center' }}>How To Use</h1>
            <div style={{width:"100%", height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>

                  <iframe width="560" height="315" src="https://www.youtube.com/embed/HQVX0LhaA0o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3j1rU31vVMid4ma_7BIvXnkbE_OrHz7KykpeqLht8HOShxA/viewform?embedded=true" width="640" height="947" >Loading…</iframe>
            </div>
        </div>
    )
}

export default HowToUse
