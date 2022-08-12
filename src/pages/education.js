import * as React from "react"
import Layout from "../components/layout"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { FaArrowAltCircleRight} from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import { Link } from "gatsby"
import '../style.css'
import Star from "../components/star";

const Education = () => {

    const educationMaterial = [
        {
            'title':'Gamma Ray Burst Unit',
            'content':'Standards-based activities designed to use gamma-ray bursts to engage your students and teach them science and math concepts',
            'link':'/educationSubpages/gammaRayBurstUnit/',
            'external': false,
            'image':'SwiftGRB.png'
        },
        {
            'title':'GEMS The Invisible Universe',
            'content':'The Electromagnetic Spectrum from Radio Waves to Gamma-rays Guide',
            'link':'/educationSubpages/gems/',
            'external': false,
            'image':'SwiftGems.png'
        },
        {
            'title':"Newton's Laws of Motion",
            'content':"A set of 4 posters depicting and explaining Newton's laws of motion and gravitation",
            'link':'/educationSubpages/newton/',
            'external': false,
            'image':'SwiftNewton.png'
        },
        {
            'title':"Astronomy From Home",
            'content':'Use real astronomical data in your classroom!',
            'link':'https://afh.sonoma.edu/',
            'external': true,
            'image':'AfHLogo2-CR.png'
        },
        {
            'title':"Space Math at NASA",
            'content':'Visit this NASA resource to download hundreds of math problems for grades K12 featuring a behind the scenes look at NASA press release',
            'link':'https://spacemath.gsfc.nasa.gov/',
            'external': true,
            'image':'SpaceMathICON.jpg'
        },
    ]

    return (
    <Layout>
        <div>
            <h1>SWIFT EDUCATOR RESOURCE AREA</h1>
            <Star/>
            <p style={{textAlign:'start'}}>The Neil Gehrels Swift Observatory investigates extremely intense explosions called gamma-ray bursts, blazing supernovae and voracious black holes gobbling down matter at fantastic rates. This page features standards-based activities which use the targets of Swift science to help educators engage students in exploring the wonders of the gamma-ray Universe.</p>
            <div className="education-items-container">
            {educationMaterial.map( item => 
                <div key={item.title} className="item-container">
                    
                    {item.external ? 
                    <a href={item.link}>
                        <img src={`/static/${item.image}`} style={{borderRadius:'50%', margin:'15px', maxWidth:'100px'}}/>
                    </a>
                    :
                    <Link to={item.link}>
                        <img src={`/static/${item.image}`} style={{borderRadius:'50%', margin:'15px', maxWidth:'100px'}}/>
                    </Link>
                    }

                    {item.external ? 
                        <h4><a href={item.link}>{item.title}</a></h4>     
                        :
                        <h4><Link to={item.link}>{item.title}</Link></h4>
                    }
                    <p>{item.content}</p>
                    <p className='education-item-buttons' >
                        {item.external ? 
                            <a href={item.link}>Check it out here <FaExternalLinkAlt style={{width:'0.9em', margin:'5px'}}/></a>
                             : 
                            <Link to={item.link}>Learn more <FaArrowAltCircleRight /> </Link>
                        }
                    </p>
                </div> 
            )}
            </div>
        </div>
    </Layout>
  )
}

export default Education
