import * as React from "react"
import Layout from "../../components/layout"
import '../../style.css'
import { FaArrowAltCircleRight} from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import {Link} from 'gatsby'
import Star from "../../components/star";

//https://pdf2png.com/
//https://www.pdf2go.com/

const Powerpoint = () => {

    const powerpoints = [
        {
            title:"CSTA Newton's Laws Workshop, October 2008",
            presenter:'Dr. Lynn Cominsky & Dr. Kevin McLin',
            presentationType:'Teacher Workshop',
            folder:'powerpoints/CSTANewtonsLawWS',
            folderLength:29,
            slides:null,
            ppt:'newton_csta08.ppt',
            pptx:'newton_csta08.pptx'
        },
        {
            title:"Swift E/PO at Sonoma State University February 2008",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftEPOatSSU2008',
            folderLength:23,
            slides:null,
            ppt:'swift_feb2008.ppt',
            pptx:'swift_feb2008.pptx'
        },
        {
            title:"Swift E/PO at Sonoma State University",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftEPO2005',
            folderLength:20,
            slides:null,
            ppt:'swift_epo.ppt',
            pptx:'swift_epo.pptx'
        },
        {
            title:"Swift View of the Universe",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'various locations',
            folder:'powerpoints/SwiftView',
            folderLength:36,
            slides:null,
            ppt:'swiftview.ppt',
            pptx:'swiftview.pptx'
        },
        {
            title:"Swift E/PO at Sonoma State University",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'GSFC',
            folder:'powerpoints/SwiftEPOGSFC',
            folderLength:38,
            slides:null,
            ppt:'swift_epo_GSFC.ppt',
            pptx:'swift_epo_GSFC.pptx'
        },
        {
            title:"Swift and the Global Telescope Network",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftGlobalTelescope',
            folderLength:7,
            slides:null,
            ppt:'swift_globalTelescopeNetwork.ppt',
            pptx:'swift_globalTelescopeNetwork.pptx'
        },
        {
            title:"The Road to the Internet",
            presenter:'Tom Arnold',
            presentationType:'SwEC GSFC',
            folder:'powerpoints/RoadInternet',
            folderLength:36,
            slides:null,
            ppt:'roadOfTheInternet.ppt',
            pptx:'roadOfTheInternet.pptx'
        },
        {
            title:"Things my Mother Never Told me about the Universe",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'CSTA Long Beach, CA',
            folder:'powerpoints/Mother',
            folderLength:47,
            slides:null,
            ppt:'mother.ppt',
            pptx:'mother.pptx'
        },
        {
            title:"Swift E/PO at Sonoma State University October 2003",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/Swift_EPO_2003',
            folderLength:19,
            slides:null,
            ppt:'swift_epo_2003.ppt',
            pptx:'swift_epo_2003.pptx'
        },
        {
            title:"Swift Education Committee October 2003",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'SwEC Report',
            folder:'powerpoints/Swift_Education_committee_oct_2003',
            folderLength:18,
            slides:null,
            ppt:'swec_101903.ppt',
            pptx:'swec_101903.pptx'
        },
        {
            title:"Nature's Second Biggest Bangs: The Gamma Ray Burst Zoo",
            presenter:'Dr. Phil Plait',
            presentationType:'Workshop',
            folder:'gammaRayB',
            folderLength:28, 
            slides:null,
            ppt:'csta_grb1_oct102003.ppt',
            pptx:'csta_grb1_oct102003.pptx'
        },
        {
            title:"GEMS: The Invisible Universe October 2003- CSTA",
            presenter:'	Dr. Lynn Cominsky',
            presentationType:'Workshop',
            folder:'gems',
            folderLength:28,
            slides:null,
            ppt:'gemscsta1003.ppt',
            pptx:'gemscsta1003.pptx'
        },
        // {
        //     //This one is weird cause it would lead to sub-powerpoints
        //     title:"Swift Education Committee Meeting Page Summer 2003 at SSU",
        //     presenter:'	Dr. Lynn Cominsky',
        //     presentationType:'Workshop',
        //     folder:'powerpoints/CSTANewtonsLawWS', //needs change
        //     folderLength:2, //needs change
        //     slides:null,
        //     ppt:'newton_csta08.ppt',//needs change
        //     pptx:'newton_csta08.pptx' //needs change
        // },
        {
            title:"Swift E/PO at Sonoma State University April 2003",
            presenter:'Dr. Phil Plait',
            presentationType:'E/PO Report',
            folder:'powerpoints/PublicOutreach2003',
            folderLength:15,
            slides:null,
            ppt:'publicOutreach.ppt',
            pptx:'publicOutreach.pptx'
        },
        {  
            title:"GEMS: The Invisible Universe January 2003- AAPT",
            presenter:'Tim Graves and Sarah Silva',
            presentationType:'Workshop',
            folder:'powerpoints/GEMS2003', 
            folderLength:28, 
            slides:null,
            ppt:'gems2003.ppt',
            pptx:'gems2003.pptx'
        },
        {
            title:"Swift E/PO at Sonoma State University December 2002",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/EPO_dec_2002',
            folderLength:15,
            slides:null,
            ppt:'swif1202.ppt',
            pptx:'swif1202.pptx'
        },
        {
            title:"Swift E/PO at Sonoma State University August 2002",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/EPO_August_2002',
            folderLength:15,
            slides:null,
            ppt:'08_02_02.ppt',
            pptx:'08_02_02.pptx'
        },
        {
            title:"The Supernova, the Black Hole and the Gamma Ray Burst",
            presenter:'Dr. Phil Plait',
            presentationType:'To Educator Ambassadors',
            folder:'powerpoints/Supernova',
            folderLength:24,
            slides:null,
            ppt:'supernova.ppt',
            pptx:'supernova.pptx'
        },
        {
            title:"The Electromagnetic Spectrum",
            presenter:'Dr. Phil Plait',
            presentationType:'To Educator Ambassadors',
            folder:'powerpoints/ElectromagneticSpectrum',
            folderLength:21,
            slides:null,
            ppt:'electromagneticSpectrum.ppt',
            pptx:'electromagneticSpectrum.pptx'
        },
        {
            title:"The Universe According to NASA",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'To Educator Ambassadors',
            folder:'powerpoints/UniverseAccordingToNASA',
            folderLength:60,
            slides:null,
            ppt:'NASAoverview.ppt',
            pptx:'NASAoverview.pptx'
        },
        {
            title:"The Swift Gamma Ray Burst Explorer",
            presenter:'Pennsylvania State University',
            presentationType:'Teacher Workshop',
            folder:'powerpoints/GRBExplorer',
            folderLength:25, 
            slides:null,
            ppt:'GRBExplorer.ppt',
            pptx:'GRBExplorer.pptx' 
        },
        {
            title:"CSTA Waves Light up the Universe!",
            presenter:'Dr. Laura Whitlock',
            presentationType:'Teacher Workshop',
            folder:'powerpoints/CSTA_Waves',
            folderLength:24,
            slides:null,
            ppt:'csta_waves.ppt',
            pptx:'csta_waves.pptx'
        },
        {
            title:"The Extreme Universe of Gamma-ray Astronomy",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'Public Lecture',
            folder:'powerpoints/ExtremeUniverseOfGRA',
            folderLength:34,
            slides:null,
            ppt:'extreme3.ppt',
            pptx:'extreme3.pptx'
        },
        {
            title:"SwEC Meeting at Sonoma State University",
            presenter:'Dr. Laura Whitlock',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftAndGLAST-Whitlock',
            folderLength:23,
            slides:null,
            ppt:'swec_01.ppt',
            pptx:'swec_01.pptx'
        },
        {
            title:"SwEC Meeting at Sonoma State University",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftAndGlast-Lynn',
            folderLength:7,
            slides:null,
            ppt:'GLAST&Swift.ppt',
            pptx:'GLAST&Swift.pptx'
        },
        {
            title:"Gamma-Ray Astronomy -The Short Story",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'Public Lecture',
            folder:'powerpoints/gammaRayAstronomy-SS',
            folderLength:27,
            slides:null,
            ppt:'grastronomy.ppt',
            pptx:'grastronomy.pptx'
        },
        {
            title:"SEU E/PO at Sonoma State University",
            presenter:'Dr. Lynn Cominsky',
            presentationType:'E/PO Report',
            folder:'powerpoints/SEUatSonoma',
            folderLength:11,
            slides:null,
            ppt:'seuepo05_01.ppt',
            pptx:'seuepo05_01.pptx'
        },
        {
            title:"Waves Light up the Universe",
            presenter:'Dr. Phil Plait',
            presentationType:'Teacher Workshop',
            folder:'powerpoints/lightUpTheUniverse',
            folderLength:22,
            slides:null,
            ppt:'waves.ppt',
            pptx:'waves.pptx'
        },
        {
            title:"Education and Public Outreach 2000",
            presenter:'Dr. Laura Whitlock',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftEPO2000',
            folderLength:16, 
            slides:null,
            ppt:'swiftCAR.ppt',
            pptx:'swiftCAR.pptx'
        },
        {
            title:"The Swift EPO Program 12-1999",
            presenter:'Dr. Laura Whitlock',
            presentationType:'E/PO Report',
            folder:'powerpoints/SwiftEPO1999',
            folderLength:13,
            slides:null,
            ppt:'swift1299.ppt',
            pptx:'swift1299.pptx'
        },
    ]

    let slides=[]
    for (const pp in powerpoints){
        for(let i = 1; i <= powerpoints[pp].folderLength; i++){
          slides.push(`/${powerpoints[pp].folder}/Slide${i}`);
        }
        powerpoints[pp].slides = slides;
        slides = []
    }


    return (
        <Layout>
            <div>
                <h1>SWIFT EDUCATION PRESENTATIONS</h1>
                <Star />
                <p>Swift scientists and educators have given many presentations about the Swift mission and its educational goals. These presentations are available here for viewing or download.</p>
                <div className='media-items-container'>
                    {powerpoints.map( powerpoint => 
                    <div className="item-container">
                        <h4>
                            <Link 
                                to='/pptDisplay'
                                state={{ 
                                    slides:powerpoint.slides, 
                                    title:powerpoint.title, 
                                    presenter:powerpoint.presenter, 
                                    presentationType:'workshop',
                                    pptDownloads:{ 
                                      ppt:`/${powerpoint.folder}/${powerpoint.ppt}`,
                                      pptx:`/${powerpoint.folder}/${powerpoint.pptx}`
                                    },
                                }}
                            >
                                {powerpoint.title}
                            </Link>
                        </h4>
                        <p>{powerpoint.presenter}</p>
                        <p>{powerpoint.presentationType}</p>
                        <p className="media-item-buttons">
                                <Link 
                                    to='/pptDisplay'
                                    state={{ 
                                        slides:powerpoint.slides, 
                                        title:powerpoint.title, 
                                        presenter:powerpoint.presenter, 
                                        presentationType:powerpoint.presentationType,
                                        pptDownloads:{ 
                                            ppt:`/${powerpoint.folder}/${powerpoint.ppt}`,
                                            pptx:`/${powerpoint.folder}/${powerpoint.pptx}`
                                        },
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

export default Powerpoint
