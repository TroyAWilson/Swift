import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const ExtremeClean = () => {
  return (
    <Layout>
        <div>
            <h1>Swift Mission Extreme Clean</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/wlnXZzDQxlQ'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
              FUN WITH GRAVITY!
              <br/><br/>
              According to legend, Isaac Newton made his observations on gravity after watching an apple fall from a tree. Make your own observations by doing the following experiments and recording the results in a gravity notebook!
              <br/><br/>

              Does the weight of an object affect the speed at which it falls?
              <br/><br/>

              SEE FOR YOURSELF!
              <br/><br/>

              1.    Choose two balls of similar size, but different weights, such as a ping-pong ball and a squash ball.
              <br/><br/>

              2.    Place a metal cookie sheet on the floor.
              <br/><br/>

              3.    Hold one ball in each hand shoulder-high over the cookie sheet.
              <br/><br/>

              4.    At the exact same time, release both balls.
              <br/><br/>

              5.    Listen for the sound of the balls hitting the cookie sheet.
              <br/><br/>

              6.    Repeat the ball release activity several times.            
              <br/><br/>

              OBSERVE:
              <br/><br/>

              Does one ball consistently hit the cookie sheet first, or do they both consistently hit at the same time? Record each trial in your Gravity Notebook.
              <br/><br/>

              Now try standing on a chair and repeating the experiment. Does the increased distance make a difference?
              <br/><br/>

              What can you conclude about the speed of falling objects?
              <br/><br/>

              Repeat the experiment one more time. This time, roll a lump of modeling clay into a smooth, flat sheet and fit it inside the cookie sheet. Now…
              <br/><br/>

              1.    Drop the balls onto the clay-line sheet.
              <br/><br/>

              2.    If the balls haven’t bounced off, carefully remove them from the clay.
              <br/><br/>

              3.    Examine the dent made in the clay by each ball.
              <br/><br/>

              4.    In your gravity notebook, describe the impression made by the light ball and the impression made by the heavy ball.
              <br/><br/>

              What can you conclude? Which ball pushes through the air with more force?
              <br/><br/>
          </p>
        </div>
    </Layout>
  )
}

export default ExtremeClean
