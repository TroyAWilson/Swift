import * as React from "react"
import Layout from "../components/layout"
import '../style.css'
import Star from "../components/star";
import { Link } from "gatsby";
import { FaArrowAltCircleRight} from "@react-icons/all-files/fa/FaArrowAltCircleRight";


const Media = ({location}) => {
    const media = location.state.media

    return (
    <Layout>
        <div>
            <h1>SWIFT OBSERVATORY MULTIMEDIA</h1>
            <Star/>
            <div className='media-items-container'>
                {media.map( item => 
                <div className='item-container' key={item.title}>
                    <h4>
                        <Link 
                            to="/mediaSubpages/mediaVideoPage" 
                            state={{
                                title:item.title,
                                videoLink:item.link,
                                description:item.description,
                                internalText:item.internalText,
                                transcript:item.transcript
                            }}
                        >
                            {item.title}
                        </Link>
                    </h4>
                    <p>{item.description}</p>
                    <p className="media-item-buttons">
                        <Link 
                            to="/mediaSubpages/mediaVideoPage" 
                            state={{
                                title:item.title,
                                videoLink:item.link,
                                description:item.description,
                                internalText:item.internalText,
                                transcript:item.transcript
                            }}
                        >
                            Check it out! <FaArrowAltCircleRight/>
                        </Link>
                    </p>
                </div>
                 )}

                {/* Powerpoint */}
                <div className="item-container">
                    <h4>
                        <Link to='/mediaSubpages/powerpoints'>
                            Powerpoints
                        </Link>
                    </h4>
                    <p>Read the very informative presentations put together by various experts from the begining of the Swift mission</p>
                    <p className="media-item-buttons">
                        <Link to='/mediaSubpages/powerpoints'>
                            Check it out! <FaArrowAltCircleRight/>
                        </Link>
                    </p>
                </div>  

            </div>
        </div>
    </Layout>
  )
}

export default Media
