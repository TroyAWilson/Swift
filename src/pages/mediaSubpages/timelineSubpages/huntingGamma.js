import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const HuntForGamma = () => {
  return (
    <Layout>
        <div>
            <h1>Hunting Gamma Ray Bursts</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/GHpszFU_Q-Y'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                FUN WITH GRAVITY!
                <br/><br/>
                Which way is down?
                <br/><br/>
                
                On Earth, that’s usually an easy question to answer, thanks to gravity. Gravity is the invisible force that pulls objects toward one another. The strength of the pull depends on how massive an object is.
                <br/><br/>

                Earth is very massive, so its gravity is very strong. It pulls everything on or near its surface to the center of the planet.
                <br/><br/>

                SEE FOR YOURSELF!
                <br/><br/>

                Stand two large cups that are the same size on a flat surface about 20 cm apart.1.    Stand two large cups that are the same size on a flat surface about 20 cm apart.
                <br/><br/>

                2.    Place a ruler on top of the cups so that it spans the distance between them.
                <br/><br/>

                3.    Tie a short piece of string (about 25 cm) to a paper clip.
                <br/><br/>

                4.    Tie the other end of the string around the center of the ruler so that the paper clip does not touch the surface.
                <br/><br/>

                OBSERVE:
                <br/><br/>

                Which way does the hanging paper clip point? Draw a sketch in your Gravity Notebook to show the position of the paper clip.
                <br/><br/>

                Raise one end of the ruler about 5 cm above the top of the cup. Draw a sketch of the paper clip’s position.
                <br/><br/>

                Now raise the other end of the ruler about 10 cm above the top of the cup. Draw a sketch showing the paper clip’s position.
                <br/><br/>

                Compare the three sketches. What can you conclude? Does the position of the ruler affect which way the paper clip points?
                <br/><br/>

            </p>
        </div>
    </Layout>
  )
}

export default HuntForGamma