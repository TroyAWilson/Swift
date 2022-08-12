import * as React from "react"
import '../style.css'
import { GiRoundStar } from "@react-icons/all-files/gi/GiRoundStar";


const Star = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', margin:'1rem'}}>
        <hr className="star-dash"/>
            <GiRoundStar style={{width:'36px', height:'32px'}}/>
        <hr className="star-dash"/>
  </div>
  )
}

export default Star