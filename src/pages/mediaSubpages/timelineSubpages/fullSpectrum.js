import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const FullSpectrum = () => {
  return (
    <Layout>
        <div>
            <h1>Full Spectrum of Color, Light, and Energy</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/s4OqYIIW7Fo'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                WHERE IN THE WORLD
                <br/><br/>
                With a dish measuring 1000 feet in diameter, 167 feet deep, and covering an area of about twenty acres, this enormous radio telescope, located at the Arecibo Observatory in Arecibo, Puerto Rico, is by far the biggest telescope in the world.  The surface, made up of almost 40,000 aluminum panels, acts as a super-magnet, collecting radio waves from the deepest parts of space.  The waves then reflect upward towards a 900 ton platform.  A huge dome attached to this platform then focuses the waves toward several antennae that hang below.  Astronomers can easily interpret these waves, which is very beneficial, because they can then effectively learn much more about our Solar System, our Galaxy, and even the farthest reaches of the Universe!
                <br/><br/>

                Use the latitude and longitude coordinates below to find other big telescopes located at these observatories around the world:
                <br/><br/>

                1)   32:39N, 105:42W
                <br/><br/>

                2)   32:50N, 109:42W
                <br/><br/>

                3)   19:44N, 155:05W
                <br/><br/>

                4)   33:19N, 116:53W
                <br/><br/>

                5)   29:15S, 70:44W
                <br/><br/>

                6)   31:16S, 149:17E
                <br/><br/>

            </p>
        </div>
    </Layout>
  )
}

export default FullSpectrum
