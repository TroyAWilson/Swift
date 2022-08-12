import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star"
import '../../style.css'
import { Link } from "gatsby";

const GRB = () => {

  let slides=[]
  for(let i = 1; i <= 28; i++){
    slides.push(`/gammaRayB/Slide${i}`);
  }

  return (
    <Layout>
        <div>
            <h1>GRB EDUCATOR'S GUIDE</h1>
            <Star/>
            <h2>GAMMA RAY BURST EDUCATOR UNIT</h2>
            <p>These standards-based activities are designed to use gamma-ray bursts -- unimaginably huge explosions which signal the births of a black holes -- to engage your students and teach them science and math concepts.</p>
            <div>
              <h3>Gamma Ray Burst Educational Unit</h3>
                <p><a href='/static/gammaRayB/gammaRayPdf.pdf' target='_blank'>PDF</a> and <a href='/static/gammaRayB/gammaRayB-Accessible.pdf' target='_blank'>Disability Accessible PDF</a></p>
                
              <h3>Card Activities</h3>
                <p><a href='/static/gammaRayB/first10.pdf' target='_blank'>First 10</a> and <a href='/static/gammaRayB/second10.pdf' target='_blank'>Second 10</a></p>

              <h3>Presentation</h3>
              <p>Check out the <Link 
                  to='/pptDisplay' 
                  state={{ 
                    slides, 
                    title:"The Gamma Ray Burst Zoo", 
                    presenter:'Dr. Phil Plait', 
                    presentationType:'workshop',
                    pptDownloads:{ //pass these values with the folder included
                      ppt:"/gammaRayB/csta_grb1_oct102003_c.ppt",
                      pptx:"/gammaRayB/csta_grb1_oct102003_c.pptx"
                    },
                  }}
                > Gamma ray burst zoo power point presentation</Link></p>

              <h3>Poster</h3>
              <p>Download the <a href='/static/gammaRayB/poster.jpg' target='_blank'>Poster</a> and Poster <a href='/static/gammaRayB/posterActivities.pdf' target='_blank'>Activities</a></p>

            </div>
        </div>
    </Layout>
  )
}

export default GRB
