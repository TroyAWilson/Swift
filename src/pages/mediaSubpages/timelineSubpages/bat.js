import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const Bat = () => {
  return (
    <Layout>
        <div>
            <h1>BAT and the Swift Mission</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/0SUInsYhdLQ'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                THE COLOR OF HEAT
                <br/><br/>

                In the 1700s, the British scientist William Herschel discovered that different colors had different temperatures. You can test his findings for yourself.
                <br/><br/>

                Here’s what you’ll need:
                <br/><br/>

                4 clear 2-liter bottles.
                <br/><br/>
                2. 1 2-liter bottle of Pepsi, Coke, or other cola beverage.
                <br/><br/>
                5 thermometers
                <br/><br/>
                5 straws
                <br/><br/>
                string
                <br/><br/>
                red, blue, and yellow food coloring
                <br/><br/>
                pencil and paper
                <br/><br/>
                a sunny day
                <br/><br/>
                Here’s what you’ll do:
                <br/><br/>

                1. Fill the four empty bottles with water.
                <br/><br/>

                2. Add food coloring to three of the four to make one bottle each of red, yellow, and blue water. Leave the fourth bottle clear.
                <br/><br/>

                3. Place all four bottles, along with the bottle of cola on a sunny windowsill for about one hour.
                <br/><br/>

                4. Cut string into five 15 cm. pieces.
                <br/><br/>

                5. Tie one end of each string securely around a thermometer. Tie the other end to the middle of a straw.
                <br/><br/>

                6. Shake down each thermometer until they all read about the same temperature.
                <br/><br/>

                7. When the bottles have been on the windowsill for about an hour, lower one thermometer into each bottle. Rest the straw across the mouth of the bottle. The string should be short enough so that the thermometer will be suspended about halfway between the top and bottom of the bottle.
                <br/><br/>

                8. After they have been submerged for about five minutes, bring each thermometer up and record the temperature.
                <br/><br/>

                9. Move the bottles away from the windowsill so they’re no longer in sunlight. Keep them away from any heat source for 5 minutes.
                <br/><br/>

                10. Repeat steps 7 and 8.
                <br/><br/>

                Based on your observations, which color absorbs the most heat?
                <br/><br/>

                Which color reflects the most heat?
                <br/><br/>

                If you placed these colors on the electromagnetic spectrum, which order would they be in from least heat energy to most?
                <br/><br/>

                How could this information be used by building or clothing designers?            
                <br/><br/>
</p>
        </div>
    </Layout>
  )
}

export default Bat
