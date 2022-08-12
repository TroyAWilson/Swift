import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star"
import Vid from "../../components/video"
import '../../style.css'


const Summary = ({location}) => {
    console.log(location)
    return (
    <Layout>
        <div>
            <h1 style={{marin:'25px 0'}}>{location.state.title}</h1>
            <Star />
            <Vid videoLink={location.state.videoLink}/>
            {location.state.content.map( c => <p style={{textAlign:'start', margin:'25px 0'}}>{c}</p>)}
        </div>
    </Layout>
    )
}

export default Summary