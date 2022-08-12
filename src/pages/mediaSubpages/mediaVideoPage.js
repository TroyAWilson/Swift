import * as React from "react"
import Layout from "../../components/layout"
import '../../style.css'
import Star from "../../components/star";
import Vid from "../../components/video";
import Accordion from 'react-bootstrap/Accordion';


const mediaVideoPage = ({location}) => {
    console.log(location)
    return (
        <Layout>
            <div style={{width:'100%'}}>
                <h1>{location.state.title}</h1>
                <Star />
                <Vid videoLink={location.state.videoLink}/>
                <Accordion flush>
                    <Accordion.Item eventKey={1} key={1}>
                            <Accordion.Header>Transcript</Accordion.Header>
                            <Accordion.Body>
                               {location.state.transcript ? 
                                    location.state.transcript.map( p => <p style={{textAlign:'start'}}>{p}</p>)
                                    : 
                                    null
                                }
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <p style={{textAlign:'start', margin:'1em 0'}}>{location.state.internalText}</p>
            </div>
        </Layout>
  )
}

export default mediaVideoPage
