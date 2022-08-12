import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const HuntForGamma = () => {
  return (
    <Layout>
        <div>
            <h1>Hunt for Gamma Ray Burst Updates</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/pbtOEDSr454'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                Swift Mission 
                <br/><br/>
                Late last summer as most students headed back to school, NASA’s Swift observatory headed to the Goddard Space Flight Center in Greenbelt, Maryland. As engineers were assembling and testing the observatory, astronomers got a sneak preview of what to expect when the gamma ray observatory is launched later this year. For more we go to field reporter, Julia Kent.
                Since we last reported on the hunt for gamma ray bursts, astronomers detected one that was just two billion light years away. So you’d have to travel at the speed of light for two billion years to reach the crash scene. Cosmically speaking, that distance is a short hop through the universe, which is why astronomers such as Dr. Phil Plait are still marveling over the close encounter.  
                <br/><br/>
                DR. PLAIT: "As gamma ray bursts go, it wasn’t the brightest we’ve ever seen, but it was very close by, and since it was close by, it appeared brighter, just like a car’s headlights will appear brighter when they’re nearby than when they’re way off on the horizon. And so this one was very bright, and when they’re really bright, you can get data really easily, and so that’s why this one was really exciting."
                <br/><br/>
                Scientists know almost nothing about gamma ray bursts except that they’re the most violent, energetic events in the universe. They occur frequently in random parts of the sky, briefly pouring out the energy of a million billion stars. Yet because a burst lasts just a fraction of a second, it has usually disappeared before astronomers can get their telescopes focused on it. That’s what happened with the recent burst.
                <br/><br/>
                DR. PLAIT: "These things, they get bright, and then they fade away, and we caught it after it was already fading. That’s still important, we got a lot of great information, but the whole game here is to try to get these when they’re on their way up."
                <br/><br/>
                In the afterglow of the fading light, astronomers try to determine the origin of the gamma ray burst and what sort of galaxy gave birth to it. That’s where the Swift Observatory comes in.
                <br/><br/>
                DR. PLAIT: "The other thing about Swift is that its name isn’t a coincidence. It can go from one area of the sky---whoosh---over to another part, in under a minute, which is tremendously fast for a satellite. So if it detects one, say, over there, and it’s this way, it can very quickly move to that direction and then point the other telescopes it has. It has an x-ray telescope, an ultraviolet, and an optical telescope---these are all different flavors of light that it can use to study these bursts. And so within a minute, it can actually train its telescopes on these bursts and get us information at all these energies, which is just critical to understanding what these things are."
                <br/><br/>
                For students, summertime usually means a break from testing. But for Swift, the final and most critical tests will take place in the coming months. For WHAT’S IN THE NEWS, I’m Julia Kent.
            </p>
        </div>
    </Layout>
  )
}

export default HuntForGamma