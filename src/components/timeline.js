import * as React from "react"
import '../style.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Vid from "./video";
import { FaSatellite } from "@react-icons/all-files/fa/FaSatellite";
import { Link } from "gatsby";
import { FaArrowAltCircleRight} from "@react-icons/all-files/fa/FaArrowAltCircleRight";

const Timeline = ({news}) => {
  
    console.log(news)

    return (
        <VerticalTimeline  lineColor="#f2d3a2" animate={false}>
            {news.map( n =>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: '#f2d3a2' }}
                contentArrowStyle={{ borderRight: '7px solid  #f2d3a2' }}
                date={n.date}
                iconStyle={{ background: '#06556f', color: '#f2d3a2' }}
                icon={<FaSatellite />}
            >
                <h3 style={{margin:'25px 0'}} className="vertical-timeline-element-title">{n.title}</h3>
                <Vid videoLink={n.videoLink}/>
                
                <p className="media-item-buttons" style={{display:'flex', justifyContent:'center'}}>
                    <Link to={`/mediaSubpages/timelineSubpages/${n.contentLink}`}>Learn more here!<FaArrowAltCircleRight style={{marginLeft:'5px', textAlign:'center'}} /></Link>
                </p>
            </VerticalTimelineElement>
            )}
        </VerticalTimeline>
  )
}

export default Timeline
