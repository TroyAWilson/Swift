import * as React from "react"
import '../style.css'
import PPTCarousel from "../components/carousel";
import Layout from "../components/layout"

const PPTDisplay = ({location}) => {
  console.log(location)
  return (
    <Layout>
            <h1>{location.state.title}</h1>
            <h2 style={{marginBottom:'40px'}}>Author: {location.state.presenter}</h2>
            <PPTCarousel slides={location.state.slides}/>
            {location.state.pptDownloads.ppt ? 
              <p>Download the slides as a <a href={`/static/${location.state.pptDownloads.ppt}`} download target='_blank'>ppt</a> or <a href={`/static/${location.state.pptDownloads.pptx}`} download target='_blank'>pptx</a></p>
              :
              null
            }
    </Layout>
  )
}

export default PPTDisplay
