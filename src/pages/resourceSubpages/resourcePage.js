import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star"
import '../../style.css'

const ResourcePage = ({location}) => {
    return (
        <Layout>
            <div>
                <h1>{location.state.title}</h1>
                <Star />
                {location.state.internalText.map( text => <p>{text}</p>)}
                {location.state.pdf.accessible ? 
                    <p>Check out the <a href={`/static/resourceLinks/${location.state.pdf.pdf}`} target="_blank">PDF</a> and <a href={`/static/resourceLinks/${location.state.pdf.accessible}`} target="_blank">Disability accessible PDF</a></p>
                    :
                    <p>Check out the <a href={`/static/resourceLinks/${location.state.pdf.pdf}`} target="_blank">PDF</a></p>
                }
            </div>
        </Layout>
    )
}

export default ResourcePage
