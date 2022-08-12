import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const NewEye = () => {
  return (
    <Layout>
        <div>
            <h1>New Eye on the Universe</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/pUI_IlpL5DI'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                New Eye on the Universe documents the changes in NASA from the early missions to the Moon in the 1960s through the modern era, culminating in the launch of small, agile missions such as Swift. Swift will be controlled from its Mission Operations Center which is located at Penn State University, and was built by an international team of scientists and engineers. Swift will study gamma-ray bursts, which occur at the farthest reaches of the Universe, billions of light years away. The scale of the Universe is compared to that of our Solar System, and different models for these bursts are discussed.
            </p>
        </div>
    </Layout>
  )
}

export default NewEye
