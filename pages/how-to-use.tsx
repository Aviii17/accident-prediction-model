import React from "react"
import NavBar from "../components/NavBar"
const HowToUse = () => {


    return (
        <div>
            <NavBar />
            <h1 style={{ textAlign: 'center' }}>How To Use</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HQVX0LhaA0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default HowToUse
