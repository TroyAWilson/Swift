import * as React from "react"
import Layout from "../components/layout"
import '../style.css'
import { FaArrowAltCircleRight} from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import {Link} from 'gatsby'
import Star from "../components/star";

const Resources = ({location}) => {
  console.log(location.state.resources)
  return (
    <Layout>
        <div>
          <h1>PUBLIC OUTREACH RESOURCE AREA</h1>
          <Star />
          <div className='media-items-container'>
            {location.state.resources.map(r => 
              <div className="item-container">
                  <h4>
                    <Link to='/'>
                        {r.title}
                    </Link>
                  </h4>
                  <p>{r.description}</p>
                  <p className="media-item-buttons">
                      <Link 
                        to='/resourceSubpages/resourcePage'
                        state={{
                          title:r.title,
                          internalText:r.internalText,
                          pdf:r.pdf
                        }}
                      >
                          Check it out! <FaArrowAltCircleRight/>
                      </Link>
                  </p>
              </div>  
            )}
          </div>
        </div>
    </Layout>
  )
}

export default Resources
