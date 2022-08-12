import * as React from "react"
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css'

function Navyy() {

  const media=[
    {
      video:true,
      title:'The Swift Video',
      link:'https://www.youtube.com/embed/mjUN4Lnup7k',
      description:'In 1967, intense flashes of gamma rays were first observed from space. These brilliant bursts of energy burned brighter than all other gamma-ray sources in the sky.',
      internalText:'In 1967, intense flashes of gamma rays were first observed from space. These brilliant bursts of energy burned brighter than all other gamma-ray sources in the sky. They come from far out in the Universe, and to shine so brightly from such great distances, gamma-ray bursts must be the largest known energy releases since the Big Bang. To catch these events before the fade into obscurity, NASA is now considering a new observatory, an agile, advance, and responsive spacecraft that lives up to its name, Swift." - This Quicktime video is seven and a half minute long.',
      transcript:[
        "In 1967, intense flashes of gamma rays were first observed from space. These brilliant bursts of energy burned brighter than all other gamma-ray sources in the sky. They come from far out in the Universe, and to shine so brightly from such great distances, gamma-ray bursts must be the largest known energy releases since the Big Bang. To catch these events before the fade into obscurity, NASA is now considering a new observatory, an agile, advance, and responsive spacecraft that lives up to its name, Swift.",
        "Gamma rays exist at the high-energy end of the electromagnetic spectrum. They're part of a continuum that stretches from the lowest energy radio waves, through the thermal infrared of warm objects, into the rainbow spectrum of visible light, to higher energies like ultraviolet and X-ray bands. Finally, the most energetic form of electromagnetic radiation, with over 100,000 times the energy of visible light, is know as gamma rays. Only the most violent or energetic conditions produce this form of energy. These events include the decay of radioactive atoms, the collision of high-speed particles, or the incandescence of material heated to millions of degrees.",
        "Observing these flashes can be difficult. Gamma rays pass right through optical lenses and mirrors, so most telescopes produce fuzzy images. Most current observatories locate these bursts within a vague area of the sky, a size many times larger than the full moon. Scientists needed a better way. A newer technique, called coded aperture imaging, produces a sharper picture with observation positions, accurate to within a few arc-minutes.",
        "The BeppoSAX observatory was the first to use this technique to observe these releases of energy. It could quickly and accurately locate a gamma-ray burst, and within a few hours point sensitive X-ray telescopes toward the event. Although the source had faded by a factor of thousands in those hours, BeppoSAX was able to discover a faint afterglow of X-rays. When optical telescopes looked at these sources they saw dim, red fading points of light. Astronomers learned they could study these bursts even after the first few seconds of gamma ray release had passed. Hours later, the afterglow is still bright enough for larger aperture telescopes to gather important data and determine the redshift distance.",
        "The findings are astonishing. One well observed burst originated over 9 billion light years from Earth. Its gamma rays had been traveling for three quarters the age of the Universe. Putting its size and power in perspective, had this gamma-ray burst occurred only a 1000 light years away, on our side f the galaxy, the flash would have burned ten times brighter than the noon time sun.",
        "Even with these recent discoveries, big questions remain. What natural events could produce such amazing power, violent eruptions that convert a star's worth of mass into gamma-ray energy? How do these powerful explosions impact their surroundings? And what can these energy releases tell us about the Universe and the laws of physics under extreme conditions.",
        "To solve these mysteries an international collaboration of scientists from the United States, the United Kingdom, and Italy propose the next step, a mission called Swift. This new observatory will rapidly redirect a number of improved instruments toward these bursts, helping to lift the veil of secrecy surrounding this phenomenon.",
        "The proposed spacecraft will contain three instruments. The Burst Alert Telescope, called BAT, is an advance coded aperture gamma-ray telescope. A sensitive X-ray telescope, the XRT, provides fine imaging and spectroscopic resolution. And finally, the observatory will carry the UVOT, an ultraviolet and optical telescope. With these instruments working together, Swift will help scientists gain a better understanding of the very nature of gamma-ray bursts.",
        "About once a day the BAT will detect a bursts in its wide field of view and quickly determine its position to within a fifteenth of a degree. Swift will instantly notify large aperture telescopes on Earth where to find their new target. At the same time, the spacecraft will quickly re-point itself so its X-ray telescope and UVOT can immediately observe the event. In less than one minute, Swift will have its narrow-field instruments trained directly on the new flash location.",
        "The first minutes of a gamma-ray burst are critical. They're bright enough in visible light and X-rays to quickly reveal their distance and location. Gas and dust in the region around this flash will leave distinctive fingerprints on the data. As the afterglow continues to fade over the following minutes, hours, and days, the sensitive instruments on Swift will periodically return to recent bursts and monitor their decline, even as the BAT finds new bursts on a daily basis.",
        "Swift instruments will advance astronomers understanding as to the exact cause of gamma-ray bursts. And two major theories are current under consideration. One model is a hypernova. At the end of its life cycle a massive star rapidly burns up its fuel and falls into itself. The death scream of the falling star is the birth cry of the black hole. The result is a spectacular burst of gamma rays.",
        "1Massive stars live short and brilliant lives so they don't have time to move very far from their birthplaces. Scientist believe hypernova bursts will be found close to star forming regions, in the company of many other bright young stars. A second gamma-ray burst model involves two neutron stars locked in tight orbit around each other. They slowly spiral inward until, in a brief violet episode, they merge to form a black hole. In the billion years it takes for their orbit to decay, the pair of neutron stars can wonder far from the original galaxy. If these produce the gamma-ray event, they will be found in deep intergalactic space.",
        "Today, astronomers are posed to learn a great deal more about these spectacular bursts of gamma rays. The Swift mission is the next step in uncovering the origin of these fascinating events. Ultimately, scientists will learn more about the laws of physics under extreme conditions and perhaps mankind's place in the Universe."
      ]
    },
    {
      video:true,
      title:'Journey to a Black Hole',
      link:'https://www.youtube.com/embed/0GjTR7vn55w',
      description:'Imagine a place in the cosmos where gravity is so powerful that nothing not even light can escape its pull.',
      internalText:"Imagine a place in the cosmos where gravity is so powerful that nothing not even light can escape its pull. It's a region surrounded by swirling streams of hot gas heated to temperatures reaching, millions of degrees. A Phenomenon where particle jets shoot from its center at nearly the speed of light, racing away from an event horizon that it's an unforgiving boundary of no return. This is a black hole, a cosmic cauldron where space and time as we know it, cease to exist.' - This QuickTime video is just over nine minutes long.",
      transcript:[
        "Imagine a place in the cosmos where gravity is so powerful that nothing not even light can escape its pull. It's a region surrounded by swirling streams of hot gas heated to temperatures reaching, millions of degrees. A Phenomenon where particle jets shoot from its center at nearly the speed of light, racing away from an event horizon that it's an unforgiving boundary of no return. This is a black hole, a cosmic cauldron where space and time as we know it, cease to exist. (Title: Journey to a Black Hole)",
        "Black holes have captured our imagination and become the source of many science fiction stories. We imagine them as portals into parallel universes or giant vacuum cleaners sucking the nearby space clean of all matter. In reality black holes play a major role in the shaping of Galaxies. By unlocking their mysteries scientists will confront the limits of our understandings when it comes to the laws of physics. Black holes have been apart of the universe since nearly the beginning of time. Based on Isaac Newton's laws of gravity in the 1700's scientist, began to discuss the possibility of an object so dense that it could completely capture light. Then in 1915 Albert Einstein proposed his theory of general relativity. He showed that gravitational fields altered the very geometry of space and time. The first real evidence of black holes was discovered during the 1960's and 70's. Observations from space revealed an unexpected source of X-rays coming from a previously unremarkable area of the galaxy. A massive object was the sources of this energy and Signus X1 became worldwide news. Scientist had discovered a black hole in a binary system providing the first real evidence. And while direct observation was impossible its existence was inferred due to the black hole's apparent gravitational effect on the companion star. Dozens of further discoveries confirm these binary system black holes to be the remains of an exploded star. And there's likely to be hundreds of thousands of these stellar inhabitants in our galaxy alone. Around the same time scientists found the centers of many different galaxies emitting astounding amounts of energy. These sources while small enough to fit inside a region the size of our solar system, produce more energy than a billion suns. Scientists had discovered the existence of supermassive black holes billions to billions of times more massive than our own sun. While their formation remains a mystery new evidence shows that most galaxies harbor these suppermassive inhabitants at their centers. Today scientists are ready to take a virtual journey to learn more about a black hole. And the tools now exist that will directly probe these marvels of the universe. Over the next twenty-five years NASA will put these tools to work in a series of missions, an important part of the space science enterprise. They'll probe the regions surrounding black holes in far greater detail than ever before. Each mission will observe this phenomenon in a different way. Like assembling the pieces of a puzzle. These missions will give us a larger picture. Challenging our understanding of black holes and moving us along on our virtual journey. One fascinating piece of this puzzle is how particle jets near the event horizon can be hearled away at nearly the speed of light. For supermassive black holes these relativistic jets can reach out to distances exceeding thousands of light years. These cosmic particle accelerators are extremely powerful. Producing energies well beyond those reached inside man made accelerators here on Earth. Peering down these jets reveals radio and optical photons being scattered into high-energy gamma rays by the incredible velocities inside the jets. The Gamma-Ray Large Area Space Telescope, or GLAST will observe these Gamma rays. So Scientist can better understand this process. Supporting the GLAST mission in the study of the jet phenomenon is a second observatory called ARISE or the Advance Radio Interferometry Between Space and Earth. Arise will image the base of the jet at a resolutions 100 times sharper than the Hubble Space Telescope, this improved view will help us learn more on how these relativistic jets are formed. Another important piece of the black hole puzzle is the accretion disk, a spiraling Taurus of gas, dust, and particles entering this region like water swirling down a drain. As matter is pulled more deeply into a back hole's gravitational well, the material heats up with amazing efficiency and radiates X-rays, the final cries of matter as it falls into the black hole. Just beyond the accretion disk lies the event horizon the boundary from which light can't escape. It's a cloak that hides a singularity where the known laws of physics break down. Constellation X, a network of X-ray satellites will probe this point of no return. This mission will measure the motions of the multimillion-degree gas and allow scientist to map the gravitational field, constructing a virtual image of a black hole. These observations will confront our understanding of general relativity inside a strong gravity field, the place where a black hole distorts space and time like the images seen in a fun house mirror. The final piece of the black hole puzzle involves detecting gravitational radiation, another key prediction of Einstein's theory. This radiation can be thought of as a ripple in the fabric of space-time traveling at the speed of light. The most dramatic case where scientists expect to find gravitational radiation is a small black hole located in a galaxy that's spiraling into the nucleus of a supermassive black hole. The space science enterprise mission called LISA, or the Laser Interferometer Space Antenna will be the first observatory to measure this gravitational radiation and provide a precision test to the theory of general relativity. Completing our cosmic puzzle will show us how black holes can serve as laboratories of extreme gravity, it's the dominating force that allows gas, stars, solar systems, and Galaxies to evolve and interact. Understanding extreme gravity's influence on space and time will provide unique new insights into the structure and evolution of the Universe. NASA's virtual journey to a black hole will challenge current physical laws and theories and perhaps open the doors to a new era of physics. Providing a more fundamental understanding of the universe and our place within it.",
        "Special Thanks to:",
        "Dr. Padi Boyd",
        "Tim Camahan",
        "Lisa Guerra",
        "Allie Hajian",
        "Dr. Jim Lochner",
        "Dr. Kipp Thorne",
        "Christopher Wanjek",
        "Dr. Nick White",
        "Dr. Laura Whitlock"
      ]
    },
    {
      video:true,
      title:'Black Hole Video',
      link:'https://www.youtube.com/embed/YjpX9snW2Mw',
      description:'A short 26 second video, which shows an animation of a distant black hole complete with jets and an accretion disk. (No Audio)',
      internalText:'Distant view of supermassive black hole, with jets and an accretion disk. Animation slowly approaches the event horizon of the black hole as material moves out along the jets and spirals in toward the center of the black hole.',
      transcript:['*This video has no audio*']
    },
    {
      video:false,
      title:'The Swift Song',
      link:'https://www.youtube.com/embed/7IM3L-wX38U',
      description:"The Swift Song is the theme song of the mission; an upbeat, catchy pop tune which teaches listeners about the math and science behind the elusive gamma ray bursts and the Swift satellite. It's a roller coaster gamma ray ride!",
      internalText:"The Swift Song is the theme song of the mission; an upbeat, catchy pop tune which teaches listeners about the math and science behind the elusive gamma ray bursts and the Swift satellite. It's a roller coaster gamma ray ride! Performed by The Chromatics as part of their AstroCappella educational project: www.astrocappella.com. The Chromatics are an a capella group of astrophysicists including Padi Boyd, Alan Smale, Karen Smale, Lisa Kelleher (all from NASA/Goddard Space Flight Center), John Meyer (JHU), Deb Nixon, and Paul Kolb. Lyrics and music to written by Padi Boyd. Produced by Jeff Gruber (Blue House Productions) and The Chromatics. Copyright 1999 P. Boyd.",
      //the transcript here is just blatantly incorrect
      transcript:[
        'We know that gamma ray explosions happen randomly all over the sky',
        "(It's like a lottery: a ticket for each square degree)",
        "You see a FLASH! and then there's not another till about a day has gone by",
        "(But that depends upon detector sensitivity)",
        "In just a moment they spew energy worth (That's pretty fast)",
        "A value we can't even fathom on Earth (It's really vast!)",
        "But just what's giving rise to gamma ray sparked skies?",
        "Is it the death cry of a massive star or black hole birth?",
        "(Or both, or both? or both!)",
        
        "Chorus:",
        "Swiftly swirling, gravity twirling",
        "Neutron stars about to collide",
        "Off in a galaxy so far away",
        "Catastrophic interplay",
        "A roller coaster gamma ray ride",
        "Superbright explosion then",
        "Never to repeat again",
        "How are we supposed to know?",
        "How about a telescope rotation",
        "Swiftly onto the location",
        "Of its panchromatic afterglow?",

        "In just a moment gamma ray bursts reach a peak and swiftly fade from view",
        "(It's like a beacon shining clear across the Universe)",
        "But they leave embers in the longer wavelengths fading for a day or two",
        "(It's exponential -- it decays forever)",
        "To solve this space age mystery is why (We wanna know)",
        "We want to catch a thousand bursts on the fly (What makes' em go?)",
        "Their X-ray light disperse unlock the Universe",
        "Measure their distance from their redshift mark their spot on the sky",
        "(They're where? They're here! They're there! They're everywhere!)",

        "(Chorus)",

        "Swiftly swirling, gravity twirling",
        "Neutron stars about to collide",
        "Off in a galaxy so far away",
        "Catastrophic interplay",
        "A roller coaster gamma ray ride",
        "Superbright explosion then",
        "Never to repeat again",
        "How are we supposed to know?",
        "Swift is the satellite that swings",
        "Onto those brightly bursting things",
        "To grab the multiwavelength answer to what makes them glow",

        "It's like a lottery - a ticket for each square degree",
        "It's like a beacon shining clear across the Universe",
        "Swift is the satellite that swiftly swings all over the sky",
        "Swift is designed to catch a burst of gamma rays on the fly",
      ]
    },
  ]

  // Resources
  const resources=[
    {
      title:'The Swift Launch Litho',
      description:"The Swift launch litho is a one-page litho that describes the science of NASA's Swift mission",
      internalText:[
        "The Swift launch litho is a one-page litho that describes the science of NASA's Swift mission, as well as providing an activity for students to do on the back. It was produced in September 2004 for distribution at the Swift launch.",
      ],
      pdf:{
        pdf:'swiftLithioPdf.pdf',
        accessible:'swiftLithioPdfDisability.pdf'
      }
    },
    {
      title:'The Swift Launch Fact Sheet',
      description:"The Swift Launch fact sheet is a four-page color brochure that describes the science of NASA's Swift Mission",
      internalText:["The Swift launch fact sheet is a four-page color brochure that describes the science of NASA's Swift mission, as well as providing tables that summarize the instrumental parameters and the follow-up team participants. It was produced in September 2004 for distribution at the Swift launch and was updated two years after launch, in November 2006."],
      pdf:{
        pdf:'launchFactsheet.pdf',
        accessible:'launchFactsheetDisability.pdf'
      }
    },
    {
      title:'The Swift Fact Sheet',
      description:'This fact sheet briefly describes the Swift mission, its intruments, and ground system',
      internalText:["This fact sheet briefly describes the Swift mission, its instruments, and ground system. Also included are tables listing the instrument parameters and a listing of the major institutions involved. The fact sheet will be updated as needed. Last update: July 2004."],
      pdf:{
        pdf:'factsheet.pdf',
        accessible:null
      }
    },
    {
      title:'The 2001 Swift Brochure',
      description:'Catching Gamma-Ray bursts on the Fly',
      internalText:["Catching Gamma-Ray Bursts on the Fly ... Gamma-ray bursts are distant explosions that represent the greatest release of energy the Universe has seen since the Big Bang. Satellites detect about one of these bursts a day, and scientists do not know what causes them. Now there is a satellite dedicated to addressing the gamma-ray burst mystery. Swift, a NASA mission with international participation, is planned for a 2003 launch. Swift will find hundreds of these powerful flashes of light each year."],
      pdf:{
        pdf:'2001Brochure.pdf',
        accessible:'2001BrochureDisability.pdf'
      }
    },
    {
      title:'The Swift Glider',
      description:'The Swift Satellite is named for an agile bird that catches its food on the fly. Now you can build a paper airplane designed to look like a Swift! The kit comes with pre-printed heavy-duty colored paper, and assembly only takes a few minutes.',
      internalText:["The Swift Satellite is named for an agile bird that catches its food on the fly. Now you can build a paper airplane designed to look like a Swift! The kit comes with pre-printed heavy-duty colored paper, and assembly only takes a few minutes."],
      pdf:{
        pdf:'swiftGlider.pdf',
        accessible:'swiftGliderDisability.pdf'
      }
    },
    {
      title:'The Swift Satellite Model',
      description:'This booklet contains all the instructions, drawings, and descriptions needed to build a paper model of the Swift satellite. It was inspired by the model originated by the Italian Swift E/PI group, and adheres to the national technology standards. Almost all of the work to produce the English version of the model was done by Aurore Simonnet',
      internalText:["This booklet contains all the instructions, drawings, and descriptions needed to build a paper model of the Swift satellite. It was inspired by the model originated by the Italian Swift E/PI group, and adheres to the national technology standards. Almost all of the work to produce the English version of the model was done by Aurore Simonnet"],
      pdf:{
        pdf:'modelGuide.pdf',
        accessible:'modelGuideDisability.pdf'
      }
    },
    {
      title:'The Swift Sticker',
      description:'A spectacular image of the Swift satellite and depiction of the mission.',
      internalText:[
        "This sticker is great for teachers, students, or anybody in the general public.", 
        "Features Swift artwork as well as text on the back of the sticker:",
        "Swift is an international mission in the NASA Explorer program to study Gamma-Ray Bursts.",
        "Gamma-ray bursts are huge explosions located in distant galaxies, but their cause remains one of the greatest mysteries in astronomy. Swift is designed to detect the bursts and autonomously point sensitive telescopes at their position to observe the fading optical, ultraviolet, and X-ray afterglows. The spacecraft is named 'Swift' because it can very rapidly -- usually in under a minute -- swing around and aim its telescopes at a gamma-ray burst. The scientific goals are to determine the origin of the bursts and to use bursts to probe the distant universe.",
        "Swift is a NASA mission that was built and will be operated by an international collaboration. Countries with major contributions are the US, Italy and the UK.",
      ], 
      pdf:{
        pdf:'swiftSticker.jpg',
        accessible:null
      }
    },
  ]

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" sticky="top" id="main-nav"> 
      <Container>
        <Navbar.Brand href="/"> 
            <img className='nasa-image' src='/static/swiftnasalogo.png'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            {/* Home */}
            <Nav.Link as={Link} to ="/" className='nav-item'>Home</Nav.Link>
          
            {/* Education */}
            <NavDropdown title="Education" id="basic-nav-dropdown">
                <Nav.Link as={Link} to ="/education" className='nav-item'>Education Home <FaHome/></Nav.Link>
              <NavDropdown.Divider />
                <Nav.Link as={Link} to ="/educationSubpages/gammaRayBurstUnit/" className='nav-item'>Gamma Ray Burst</Nav.Link>
                <Nav.Link as={Link} to ="/educationSubpages/gems/" className='nav-item'>GEMs The Invisbile Universe</Nav.Link>
                <Nav.Link as={Link} to ="/educationSubpages/newton/" className='nav-item'>Newton's Laws of Motion</Nav.Link>
              <NavDropdown.Divider />
                <NavDropdown.Item className='nav-item' href="https://afh.sonoma.edu/"> Astronomy From Home <FaExternalLinkAlt style={{padding:'1px'}}/>  </NavDropdown.Item>
                <NavDropdown.Item className='nav-item' href="https://spacemath.gsfc.nasa.gov/"> Space Math at NASA <FaExternalLinkAlt style={{padding:'1px'}}/> </NavDropdown.Item>
            </NavDropdown>
          
            {/* Resources */}
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <Nav.Link as={Link} to ="/resources" state={{resources}} className='nav-item'>Resource Home <FaHome/></Nav.Link>
              <NavDropdown.Divider />
              {resources.map( (r,index) => 
                <Nav.Link 
                  key={index}
                  eventKey={index}
                  as={Link} 
                  to ="/resourceSubpages/resourcePage" 
                  state={{
                    title:r.title,
                    internalText:r.internalText,
                    pdf:r.pdf
                  }} 
                  className='nav-item'>
                {r.title}</Nav.Link>
              )}

            </NavDropdown>

            {/* Media */}
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <Nav.Link as={Link} to ="/media" state={{media}} className='nav-item'>Media Home <FaHome/></Nav.Link>
              <NavDropdown.Divider />
              
              {media.map( (m,index) => 
                <Nav.Link
                  key = {index}
                  eventKey = {index}
                  as = {Link}
                  to="/mediaSubpages/mediaVideoPage"
                  state={{
                    title:m.title,
                    videoLink:m.link,
                    description:m.description,
                    internalText:m.internalText,
                    transcript:m.transcript,
                  }}
                  className='nav-item'
                >
                  {m.title}
                </Nav.Link>)
              }
            <NavDropdown.Divider />
              <Nav.Link className='nav-item' as={Link} to ="/mediaSubpages/powerpoints">Powerpoints</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navyy;