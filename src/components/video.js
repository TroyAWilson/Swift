import * as React from "react"
import '../style.css'
import { GiRoundStar } from "@react-icons/all-files/gi/GiRoundStar";


const Vid = ({videoLink}) => {
    return (
    <div className="video-container">
        <iframe className="video-style" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )
}

export default Vid