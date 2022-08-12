import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const SwiftMission = () => {
  return (
    <Layout>
        <div>
            <h1>Swift Mission</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/oiVktcny1cc'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                CONVERTING FAHRENHEIT TO CELSIUS
                <br/><br/>
                In the past century, the world’s average temperature has risen by about one and a half degrees Fahrenheit or .8 degrees Celsius. Although Fahrenheit is commonly used in the United States, Celsius is the most common temperature scale used throughout the world. It’s also the scale most often used by scientists. Here’s how you can convert Fahrenheit to Celsius:
                <br/><br/>

                Start with the number of degrees Fahrenheit.
                <br/><br/>
                Subtract 32.
                <br/><br/>
                Multiply by 5.
                <br/><br/>
                Divide the product by 9.
                <br/><br/>
                Check your daily newspaper for the high and low temperatures in your town. Use this formula to figure out the temperatures in degrees Celsius.
                <br/><br/>
            </p>
        </div>
    </Layout>
  )
}

export default SwiftMission
