import * as React from "react"
import Layout from "../../../components/layout"
import Star from "../../../components/star"
import Vid from "../../../components/video"
import '../../../style.css'


const GammaRayB = () => {
  return (
    <Layout>
        <div>
            <h1>Gamma Ray Burst History</h1>
            <Star />
            <Vid videoLink='https://www.youtube.com/embed/4OfyaVkwLVU'/>
            <p style={{textAlign:'start', margin:'25px 0'}}>
                NASA's Swift Mission
                <br/><br/>
                Technology and materials developed to fight wars sometimes produce unintended consequences in peacetime. NASA’s Swift observatory, scheduled for launch in December, will pick up a trail first discovered more than 30 years ago. For more, we go to field reporter Julia Kent.
                JULIA: In the closing days of World War II, the world witnessed the destructive power of nuclear weapons in the Japanese cities of Hiroshima and Nagasaki. As a result, a dangerous rivalry developed between the United States and the Soviet Union. The situation was very dangerous as both nations amassed a huge arsenal of nuclear weapons---enough to destroy the entire planet. To slow the development of even more powerful nuclear weapons, several countries, including the U.S. and the Soviet Union signed a treaty in 1963 in which they agreed to ban the testing of nuclear weapons in the atmosphere or in space.
                <br/><br/>
                To guard against any violations of the ban, the United States launched a series of satellites designed to detect x-rays and gamma rays, two kinds of high-energy electromagnetic waves that are generated during a nuclear explosion. The satellites could determine not only the existence of such radiation, but also the direction from which they came, allowing scientists to determine if the test ban treaty had been broken.
                <br/><br/>
                In 1969, scientists got a surprise. The satellites started detecting bursts of gamma rays, but to the amazement of astronomers, the bursts did not come from anywhere on Earth. After analyzing more than a dozen of these gamma ray bursts, scientists announced in 1972 that the mysterious explosions were coming from outer space and were not manmade at all.
                <br/><br/>
                With increasingly more sensitive and accurate satellites, it has been found that the gamma ray bursts occur at least once a day somewhere in the universe, and are generally located at tremendous distances, billions of light years away!
                <br/><br/>
                We know that gamma ray bursts are the most powerful events seen in the universe today. In just a few milliseconds, one gamma ray burst pours out more energy than a million trillion trillion times the explosive energy of a nuclear bomb.
                <br/><br/>
                Yet, there is much that astronomers still don’t know about gamma ray bursts. How does the explosion of one star produce trillions of times the Sun’s energy? What exactly causes the flash of gamma rays?
                <br/><br/>
                A new, modern space mission may help to solve the many mysteries of gamma ray bursts. NASA’s Swift Observatory will have the capacity to locate a burst only seconds after the blast, swiftly turning to observe the gamma rays and X-rays and radiating from the burst.
                <br/><br/>
                Next month, What’s In The News will take an in-depth look at the mysteries of gamma ray bursts and the tools that help help solve those mysteries!
                <br/><br/>
                For What’s In The News, I’m Julia Kent.
            </p>
        </div>
    </Layout>
  )
}

export default GammaRayB