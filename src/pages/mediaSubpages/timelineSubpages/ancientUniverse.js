import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const AncientUniverse = () => {
  return (
    <Layout>
        <div>
            <h1>Mapping of Ancient Universe</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/y6fkD8klOtM'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                Mapping of Ancient Universe
                <br/><br/>
                Annual medical exams help to monitor the health and map the growth that a patient makes from year to year. Imagine the challenge when the patient is the universe itself. For more we go to field reporter Julia Kent.
                JULIA: Last month, cosmologists announced that they have successfully calculated the age, the composition, and the shape of the Universe by producing a precise map that shows the Universe as it existed 380,000 years after its birth. They have also used this map to determine the date when the very first stars appeared, just 200 million years after the Big Bang, the explosive event that marked the birth of the universe.
                <br/><br/>
                Cosmologists include astronomers and other scientists who study the Universe. The new map was made by a satellite called the Wilkinson Microwave Anisotropy Probe, or WMAP for short. The new results are a triumph for cosmologists because they vastly improve our basic understanding of how the Universe has grown and changed since its formation.
                <br/><br/>
                After the initial examination, here’s how the Universe checks out.
                <br/><br/>
                Age: 13.7 billion years. This number is now known more accurately than ever before.
                <br/><br/>
                Shape: geometrically flat. That means that parallel lines will never meet, no matter how far they travel.
                <br/><br/>
                Composition: mostly weird, unknown stuff. As scientists interpret the new WMAP results, only four percent of the Universe is made up of normal matter. That’s the same stuff that makes up all of us: electrons, protons, neutrons, and other particles smaller than atoms. So if matter composes only four percent of the Universe, what makes up the other 96 percent?
                <br/><br/>
                Cosmologists believe that about 23 percent of the leftover is "dark matter" – exotic particles that haven’t been discovered yet and aren’t visible to humans. The remaining 73 percent of the Universe is an equally mysterious "dark energy" that may be pushing the Universe to expand at an ever-faster rate of speed.
                <br/><br/>
                As you might expect, it was a tremendous challenge to make a map of the invisible. Like doctors who use special equipment to peek inside the human body, cosmologists have tools that help them make sense of vast expanses of darkness.
                <br/><br/>
                To meet that challenge, scientists and engineers are designing new tools that allow them to gaze into the Universe at wavelengths of light that are invisible to the human eye. Some tools, like WMAP, look in the low-energy radio wave part of the electromagnetic spectrum. But to get a complete picture, scientists need to look at different wavelengths. Doctors use high-energy X-rays to look inside your body, but sometimes cosmologists need to use even higher energies. For that they need devices that see gamma rays.
                <br/><br/>
                One such device is a gamma-ray observatory scheduled for launch next winter. It’s known as Swift, for its ability to swiftly turn and point its instruments on gamma ray bursts. These bursts are mysterious, short-lived, and incredibly powerful explosions. They’re believed to originate from the farthest reaches of the Universe, which means they occurred when the Universe was very young. It’s possible that Swift’s observations of gamma ray bursts may add to our knowledge of how the Universe is expanding, and what’s in it. It’s also theorized that the Universe’s first stars – the ones born 200 million years after the Universe itself – explode at the ends of their lives, producing gamma ray bursts. A detection of one of these infant bursts would tie together the biggest extremes in the Universe, from radio waves to gamma rays.
                <br/><br/>
                In the weeks ahead, WHAT’S IN THE NEWS will explore the Invisible Universe and follow the development of an exciting new tool designed to illuminate the darkness.
                <br/><br/>
                For What’s In The News, I’m field reporter Julia Kent.
            </p>
        </div>
    </Layout>
  )
}

export default AncientUniverse
