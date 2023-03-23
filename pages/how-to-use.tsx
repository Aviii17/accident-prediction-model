import React from "react"
import NavBar from "../components/NavBar"
const HowToUse = () => {


    return (
        <div>
            <NavBar />
            <h1 style={{ textAlign: 'center' }}>How To Use</h1>
            <div style={{width:"100%", height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            </div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/HQVX0LhaA0o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default HowToUse
