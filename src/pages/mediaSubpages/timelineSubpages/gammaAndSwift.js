import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const GammaAndSwift = () => {
  return (
    <Layout>
        <div>
            <h1>Gamma-rays and the Swift Mission</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/5TQGq7O04tE'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                Doing The Wave
                <br/><br/>
                
                Demonstrate the movement of a beam of light by making the following types of waves:
                <br/><br/>

                Vertical transverse wave
                <br/><br/>

                Tie a thin cord or rope to a doorknob or stretch it between two people. Move the rope in a steady up and down pattern. Observe the waves.
                <br/><br/>

                Horizontal transverse wave
                <br/><br/>

                Now move the rope in a left-to-right motion.
                <br/><br/>

                Diagonal transverse wave
                <br/><br/>

                This time, move the rope diagonally, reaching your hand approximately from the height of your right shoulder to the height of your left hip.
                <br/><br/>

                With each type of wave, observe the following:
                <br/><br/>

                Wavelength — the distance from the top of one wave to the top of the next.
                <br/><br/>

                Amplitude — the height of each wave crest (the top of the wave) or the depth of each wave trough (the bottom of the wave).
                <br/><br/>

                Frequency — the number of wave crests passing a point in one second.
                <br/><br/>

                What can you do to change the wavelength, amplitude, or frequency of your waves?
                <br/><br/>

                Light travels in a combination of horizontal, vertical, and diagonal waves, each vibrating in a different plane. By separating out one set of waves, you can polarize the light. To simulate polarized light, pass a thin cord or rope through a slit on the back of a slatted chair. Observe what happens when you try to produce a horizontal wave!            </p>
                <br/><br/>

        </div>
    </Layout>
  )
}

export default GammaAndSwift
