import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star";
import Timeline from "../../components/timeline";
import '../../style.css'

const SwiftTimeline = () => {

    // 11/10/00 : https://www.youtube.com/embed/oiVktcny1cc
    // 1/19/01 : https://www.youtube.com/embed/s4OqYIIW7Fo
    // 4/27/01 : https://www.youtube.com/embed/GHpszFU_Q-Y
    // 3/08/02 : https://www.youtube.com/embed/5TQGq7O04tE
    // 3/29/02 : https://www.youtube.com/embed/0SUInsYhdLQ
    // 4/26/02 : https://www.youtube.com/embed/wlnXZzDQxlQ
    // 3/21/03 : https://www.youtube.com/embed/y6fkD8klOtM
    // 4/04/03 : https://www.youtube.com/embed/4OfyaVkwLVU
    // 5/02/03 : https://www.youtube.com/embed/6s5VOIXWLeA
    // 5/09/03 : https://www.youtube.com/embed/pbtOEDSr454
    // 4/13/04 : https://www.youtube.com/embed/pUI_IlpL5DI

    
    //giving the div for these internal pages about a 50% max width makes it look pretty good
    const news=[
        {
            title:'The Swift Mission',
            date:'Friday November 10, 2000',
            videoLink:'https://www.youtube.com/embed/oiVktcny1cc',
            contentLink:'swiftMission'
        },
        {
            title:'Full Spectrum of Color, Light, and Energy',
            date:'Friday January 19, 2001',
            videoLink:'https://www.youtube.com/embed/s4OqYIIW7Fo',
            contentLink:'fullSpectrum'
        },
        {
            title:'Hunting Gamma Ray Bursts',
            date:'Friday April 27, 2001',
            videoLink:'https://www.youtube.com/embed/GHpszFU_Q-Y',
            contentLink:'huntingGamma'
        },
        {
            title:'Gamma-rays and the Swift Mission',
            date:'Friday March 8, 2002',
            videoLink:'https://www.youtube.com/embed/5TQGq7O04tE',
            contentLink:'gammaAndSwift'
        },
        {
            title:'BAT and the Swift Mission',
            date:'Friday March 29, 2002',
            videoLink:'https://www.youtube.com/embed/0SUInsYhdLQ',
            contentLink:'bat'
        },
        {
            title:'Swift Mission Extreme Clean',
            date:'Friday April 26, 2002',
            videoLink:'https://www.youtube.com/embed/wlnXZzDQxlQ',
            contentLink:'extremeClean'
        },
        {
            title:'Mapping of Ancient Universe',
            date:'Friday March 21, 2003',
            videoLink:'https://www.youtube.com/embed/y6fkD8klOtM',
            contentLink:'ancientUniverse'
        },
        {
            title:'Gamma Ray Burst History',
            date:'Friday April 4, 2003',
            videoLink:'https://www.youtube.com/embed/4OfyaVkwLVU',
            contentLink:'gammaRayB'
        },
        {
            title:'The birth and death of stars and Swift observations',
            date:'Friday May 2, 2003',
            videoLink:'https://www.youtube.com/embed/6s5VOIXWLeA',
            contentLink:'birthDeathStar'
        },
        {
            title:'Hunt for Gamma Ray Burst Updates',
            date:'Friday May 9, 2003',
            videoLink:'https://www.youtube.com/embed/pbtOEDSr454',
            contentLink:'huntForGamma'
        },
        {
            title:'New Eye on the Universe',
            date:'Tuesday April 13, 2004',
            videoLink:'https://www.youtube.com/embed/pUI_IlpL5DI',
            contentLink:'newEye'
        },
    ]


    return (
        <Layout>
            <div style={{width:'100%'}}>
                <h1>Swift Timeline</h1>
                <Star />
                <p>WITN was a television show, produced by WPSX at Penn State University that reached millions of middle-school students across the country. WITN produced a series a short five-minute spots and longer 15 minute features that showcase Swift.</p>
                <Timeline news={news}/>
            </div>
        </Layout>
  );
};

export default SwiftTimeline
