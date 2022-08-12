import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star"
import '../../style.css'
import { MathComponent } from "mathjax-react";
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'gatsby';

const Newton = () => {
  const newtonLaws=[
    {
        title:"Newton's First Law of Motion",
        subtitle:"Newton's First Law of Motion: Inertia and Unbalanced Forces",
        blurb:"This educational wallsheet illustrating Newton's First Law of Motion is the first of a set of four. Each image on the front of the poster illustrates Newton's First Law, and is described on the back. The wallsheet also provides teachers with background information, pre-activity reading and discussion for the students that relates the law to the Swift satellite launch, a classroom-ready activity and assessment and post-activity extension activities that tie the classroom observations back to the Swift satellite. Additional resources are also provided.",
        links:{
            standards:'/',
            pdf:'firstLawPdf.pdf',
            disabilityPdf:'/firstLawPdfDisability.pdf',
            poster:'firstLawPoster.jpg',
            derivation:null
        },
    },
    {
        title:"Newton's Second Law of Motion",
        subtitle:"Newton's Second Law of Motion: Force, Velocity and Acceleration",
        blurb:"This educational wallsheet illustrating Newton's Second Law of Motion is the second of a set of four. Each image on the front of the poster illustrates Newton's Second Law, and is described on the back. The wallsheet also provides teachers with background information, pre-activity reading for the students that relates the law to the forces, velocities, and accelerations observed during the launch of the rocket carrying Swift into orbit, pre-activity discussion, a classroom-ready activity and assessment, an extension activity for advanced students, and post-activity discussions that tie the classroom activity back to the Swift satellite launch.",
        links:{
            standards:'/',
            pdf:'secondLawPdf.pdf',
            disabilityPdf:'secondLawPdfDisability.pdf',
            poster:'secondLawPoster.jpg',
            derivation:null
        },
    },
    {
        title:"Newton's Third Law of Motion",
        subtitle:"Newton's Third Law of Motion: Actions and Reactions",
        blurb:"This educational wallsheet illustrating Newton's Third Law of Motion is the third of a set of four. Each image on the front of the poster illustrates Newton's Third Law, and is described on the back. The wallsheet also provides teachers with background information, pre-activity reading for the students that relates the law to the action of the fuel being expelled from the rocket and its reaction on the rocket carrying the Swift satellite into orbit, as well as Swift's turning motions once in orbit, pre-activity discussion with optional questions that relate to the Swift satellite, a classroom-ready activity and assessment, and post-activity discussions that tie the classroom activity back to the Swift satellite.",
        links:{
            standards:'/',
            pdf:'thirdLawPdf.pdf',
            disabilityPdf:'thirdLawPdfDisability.pdf',
            poster:'thirdLawPoster.jpg',
            derivation:null
        },
    },
    {
        title:"Newton's Law of Gravitation",
        subtitle:"Newton's Law of Gravitation",
        blurb:"The activity guide for Newton’s Law of Gravitation complements Newton's Second Law of Motion. This guide provides teachers with background information pertaining to the activities, preparation suggestions for each of the included students activities; as well as material lists for each activity, and demonstrations. The two activities introduce the student to the principles behind Newton's Law of Gravitation, one of Newton's most important physical laws.",
        links:{
            standards:'/',
            pdf:'gravityPdf.pdf',
            disabilityPdf:'gravityPdfDisability.pdf',
            poster:'gravityPoster.jpg',
            derivation:"not null"
        },
    },
  ]

  return (
    <Layout>
        <div>
            <h1>NEWTON'S LAWS OF MOTION</h1>
            <Star/>
            <h2>Newton's Laws of Motion</h2>
            <p>This is a set of 4 posters depicting and explaining Newton's laws of motion and gravitation. A set of classroom activities accompanies each poster. The activities were created to complement each other as an overall unit, whether in science or math.</p>
            <p>These activities address the following National Science <Link to='/educationSubpages/newtonStandards/'>Standards.</Link></p>

            <div style={{margin:'50px 0'}}>
                <Accordion flush>
                    {newtonLaws.map( (law,index) => 
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{law.title}</Accordion.Header>
                            <Accordion.Body>
                                <div style={{padding:'25px 10px'}}>
                                    <h4>{law.subtitle}</h4>
                                    <p style={{textAlign:'start'}}>{law.blurb}</p>
                                    <p>These activities address the following <Link to="/educationSubpages/newtonStandards/">Standards.</Link></p>
                                    <p>Download the <a href={`/static/newton/${law.links.pdf}`} target='_blank'>PDF</a> and <a href={`/static/newton/${law.links.disabilityPdf}`} target='_blank'>Disability Accessible PDF</a></p>
                                    <p>Checkout the <a href={`/static/newton/${law.links.poster}`} target='_blank'>poster</a></p>
                                    {law.links.derivation ? 
                                        <Accordion flush>
                                            <Accordion.Item eventKey='123'>
                                                <Accordion.Header >Derivation of Newton's Law of Gravitation</Accordion.Header>
                                                <Accordion.Body>
                                                    <div style={{textAlign:'start'}}>
                                                        <p>Sir Isaac Newton (1642-1727) established the scientific laws that govern 99% or more of our everyday experiences. He also explained our relationship to the Universe through his Laws of Motion and his universal theory of gravitation - which are considered by many to be the most important laws of all physical science.</p>
                                                        <p>Newton was the first to see that such apparently diverse phenomena as a satellite moving near the Earth's surface and the planets orbiting the Sun operate by the same principle: Force equals mass multiplied by acceleration, or F=ma.</p>
                                                        <p>Our everyday lives are influenced by different forces. As you know, the Earth exerts a force on us that we call gravity. We feel the force required to lift an object from the floor to a table. We can see and feel a magnet's pull on a pile of metal paper clips. But exactly how does Newton's Second Law of Motion relate to gravity? To understand Newton's theories, you must first know about the nature of force and acceleration when applied to circular motion, rather than motion in a straight line.</p>
                                                        <p>Newton's First Law of Motion tells us that, without the interaction of some sort of force, everything travels in a straight line forever. This means that an object traveling in a circular path must be influenced by a net (outside) force. The circulating object has a velocity that is constantly changing, not because its speed is changing but because its direction is changing. A change in velocity is called an acceleration. Newton's Second Law explains it this way: A net force changes the velocity of an object by changing either its speed or its direction.</p>
                                                        <p>Therefore, an object moving in a circle is undergoing an acceleration. The direction of the acceleration is toward the center of the circle. The magnitude of the acceleration is equal to, where "v" is the constant speed along the circular path and "r" is the radius of the circular path. This acceleration is called centripetal (literally, "center-seeking") acceleration. The force needed to produce the centripetal acceleration is called the centripetal force , which is equal to "ma"; according to Newton's Second Law (F=ma). But since "a"; is <MathComponent tex={String.raw`\frac{v^2}{r}`} /> the centripetal force is equal to <MathComponent tex={String.raw`\frac{mv_2}{r}`} />.</p>
                                                        <p>Majestic examples of circular motion can be found throughout our Universe: Planets orbit around the Sun in nearly circular paths; moons orbit around their planets in nearly circular paths; and satellites orbit the Earth in nearly circular paths.</p>
                                                        <p>Newton was smart enough to realize that his Second Law (F=ma) must apply to the force of gravity. He theorized that the Sun must be providing a centripetal acceleration to the Earth (and all the other planets in our solar system) in order for it to maintain its roughly circular orbit. Newton figured out that the force of gravity is the source for the acceleration. He calculated that,</p>
                                                        <MathComponent tex={String.raw`F=\frac{m_p v_2}{R}`} />
                                                        <p>where "m<sub>p</sub>" is the mass of the planet and "R" is the distance from the planet to the Sun.</p>
                                                        <p>Newton learned from his predecessor, Johannes Kepler (1571-1630), that the square of the orbital period for a planet is proportional to the cube of its orbital radius, or T<sup>2</sup> ~ R<sup>3</sup> (known as Kepler's Third Law). Since "T" is the time taken to complete one orbit, by definition:</p>
                                                        <MathComponent tex={String.raw`T=\frac{2\pi R}{v} So  v\sim \frac{R}{T}`} />
                                                        <p>Putting these equations together, we see that v~1/r. Thus, the force that the Sun exerts on a planet must take the form of:</p>
                                                        <MathComponent tex={String.raw`F=\frac{m_p V^2}{R} \sim \frac{R}{T}`} />
                                                        <p>Newton's Third Law of Motion says: For every force, there is an equal and opposite force. From this, Newton calculated that a planet must exert an equal (but oppositely directed) force on the Sun that the Sun exerts on the planet. Due to this symmetry, he concluded that the two forces must depend on the masses of both objects in the same way. This means they take the form of:</p>
                                                        <MathComponent tex={String.raw`F=\frac{m_p M_s}{R^2}`} />
                                                        <p>In his final equation, Newton added the Universal Gravitational Constant, or "G" which accounts for all of the constants of proportionality. His final equation reads:</p>
                                                        <MathComponent tex={String.raw`F=\frac{GmM}{R^2}`} />
                                                        <p>The gravitational constant cannot be derived or predicted by theory. It must be determined by experimental measurement. The value of "G" was first measured by Henry Cavendish in 1798.</p>
                                                        <p>The currently accepted value of "G" is 6.672 x 10<sup>-11</sup> N<sup>2</sup>/kg<sup>2</sup>.</p>
                                                        <p>Newton's model of gravity is one of the most important scientific models in history. It applies to everything in the Universe, from apples falling from trees to baseballs soaring into the outfield; from the Earth orbiting the Sun to a moon orbiting a planet. It applies to the motion of all of the objects in our solar system, as well as to the distant stars and galaxies.</p>
                                                        <h4>Interesting Side Note</h4>
                                                        <p>If we put the above equations together, we learn something very interesting! We know that:</p>
                                                        <MathComponent tex={String.raw`F=ma=\frac{GmM}{R^2}`} />
                                                        <p>In this case, "a" is the centripetal acceleration of an object in circular motion. From our discussion, we know that,</p>
                                                        <MathComponent tex={String.raw`a=\frax{v^2}{R}`}/>
                                                        <p>Combining these equations, we see that:</p>
                                                        <MathComponent tex={String.raw`v=\sqrt{\frac{GM}{R}}`}/>
                                                        <p>In other words, the mass of an object does not influence the orbit of the object. At a given distance, a baseball or a moon will orbit in exactly the same way at exactly the same speed!</p>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        : null
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>    
                    )}
                </Accordion>

            </div>
        </div>
    </Layout>
  )
}

export default Newton
