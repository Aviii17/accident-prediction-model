import React from "react"
import NavBar from "../components/NavBar"
const HowToUse = () => {


    return (
        <div>
            <NavBar />
            <h1 style={{ textAlign: 'center' }}>How To Use</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d8Sxb63R9P4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div style={{width:"100%", height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>

            </div>
        </div>
    )
}

export default HowToUse
