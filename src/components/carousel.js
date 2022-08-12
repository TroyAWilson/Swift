import * as React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../style.css'

const PPTCarousel = ({slides}) => {
    return (
    <Carousel>
        {slides.map( slide =>
            <div key={slide}>
                <img src={`/static/${slide}.png`} />
            </div>
        )}
    </Carousel>
  )
}

export default PPTCarousel
