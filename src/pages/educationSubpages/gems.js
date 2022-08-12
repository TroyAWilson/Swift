import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star"
import '../../style.css'
import { Link } from "gatsby";

const GEMS = () => {

  let slides=[]
  for(let i = 1; i <= 28; i++){
    slides.push(`/gems/Slide${i}`);
  }

  return (
    <Layout>
        <div>
            <h1>GEMS EDUCATOR'S GUIDE</h1>
            <Star/>
            <h2>GEMS The Invisible Universe: The Electromagnetic Spectrum from Radio Waves to Gamma-rays Guide</h2>
            <p>This guide uses the mystery of gamma-ray bursts to teach about the Electromagnetic Spectrum through a series of activities.</p>
            <div>
              <h3>GEMS Science and Math Curriculum</h3>
                <p>Check out the website <a href="https://www.lhsgems.org/" target='_blank'>here</a></p>

              <h3>Supplemental Activity: Modeling the Universe</h3>
                <p><a href='/static/gems/modelingTheUniverse.pdf' target='_blank'>PDF</a> and <a href='/static/gems/modelingTheUniverse-disability.pdf' target='_blank'>Disability Accessible PDF</a></p>
                
              <h3>Presentation</h3>
              <p>Check out the <Link 
                  to='/pptDisplay' 
                  state={{ 
                    slides, 
                    title:"GEMS: The Invisible Universe", 
                    presenter:'Dr. Lynn Cominsky', 
                    presentationType:'workshop',
                    pptDownloads:{ //pass these values with the folder included
                      ppt:"/gems/gemscsta1003.ppt",
                      pptx:"/gems/gemscsta1003.pptx"
                    },
                  }}
                > Invisible Universe power point presentation</Link></p>
            </div>
        </div>
    </Layout>
  )
}

export default GEMS
