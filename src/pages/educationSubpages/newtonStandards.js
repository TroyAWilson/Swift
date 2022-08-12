import * as React from "react"
import Layout from "../../components/layout"
import Star from "../../components/star"
import '../../style.css'
import { Link } from "gatsby";

const NewtonStandards = () => {
  return (
    <Layout>
        <div>
            <h1>NEWTON'S LAWS STANDARDS</h1>
            <Star/>

            <div className="standards-p">
                <p>
                    Standards aligned with NRC Framework 2012*, which was used to
                    create the Next Generation Science Standards and other United States
                    Standards.
                </p>

                <h4>Disciplinary Core Ideas—Physical Sciences</h4>
                <p className="tabOver">Core Idea PS2: Motion and Stability: Forces and Interactions</p>
                <p className="tabOver" style={{fontStyle:'italic'}}>How can one explain and predict interactions between objects and within systems of objects?</p>
                <p className="tabOver">Grade Band Endpoints for PS2.A (NRC Framework 2012, pgs 115-116)</p>
                
                <p className="tabOver">
                    <strong>By the end of grade 2.</strong> Objects pull or push each other when
                    they collide or are connected. Pushes and pulls can have different
                    strengths and directions. Pushing or pulling on an object can
                    change the speed or direction of its motion and can start or stop
                    it. An object sliding on a surface or sitting on a slope experiences
                    a pull due to friction on the object due to the surface that opposes
                    the object’s motion.
                </p>
            
                <p className="tabOver">
                    <strong>By the end of grade 5.</strong> Each force acts on one particular object
                    and has both a strength and a direction. An object at rest typically
                    has multiple forces acting on it, but they add to give zero net
                    force on the object. Forces that do not sum to zero can cause
                    changes in the object’s speed or direction of motion. (Boundary:
                    Qualitative and conceptual, but not quantitative addition of
                    forces are used at this level.) The patterns of an object’s motion
                    in various situations can be observed and measured; when past
                    motion exhibits a regular pattern, future motion can be predicted
                    from it. (Boundary: Technical terms, such as magnitude,
                    velocity, momentum, and vector quantity, are not introduced at
                    this level, but the concept that some quantities need both size and
                    direction to be described is developed.)
                </p>

                <p className="tabOver">
                    <strong>By the end of grade 8.</strong> For any pair of interacting objects, the
                    force exerted by the first object on the second object is equal in
                    strength to the force that the second object exerts on the first but
                    in the opposite direction (Newton’s third law). The motion of an
                    object is determined by the sum of the forces acting on it; if the
                    total force on the object is not zero, its motion will change. The
                    greater the mass of the object, the greater the force needed to
                    achieve the same change in motion. For any given object, a
                    larger force causes a larger change in motion. Forces on an object
                    can also change its shape or orientation. All positions of objects
                    and the directions of forces and motions must be described in an
                    arbitrarily chosen reference frame and arbitrarily chosen units of
                    size. In order to share information with other people, these
                    choices must also be shared.
                </p>

                <p className="tabOver">
                    <strong>By the end of grade 12.</strong> Newton’s second law accurately
                    predicts changes in the motion of macroscopic objects, but it
                    requires revision for subatomic scales or for speeds close to the
                    speed of light. (Boundary: No details of quantum physics or
                    relativity are included at this grade level.)
                </p>

                <p className="tabOver">
                    Momentum is defined for a particular frame of reference; it is the
                    mass times the velocity of the object. In any system, total
                    momentum is always conserved. If a system interacts with
                    objects outside itself, the total momentum of the system can
                    change; however, any such change is balanced by changes in the
                    momentum of objects outside the system.
                </p>
            
                <h4>Cross-Cutting Concepts</h4>

                <p className="tabOver">
                    <strong>Cause and effect:</strong> Mechanism and explanation. Events have
                    causes, sometimes simple, sometimes multifaceted. A major
                    activity of science is investigating and explaining causal
                    relationships and the mechanisms by which they are mediated.
                    Such mechanisms can then be tested across given contexts and
                    used to predict and explain events in new contexts.
                </p>

                <p className="tabOver">
                    <strong>Scale, proportion, and quantity.</strong> In considering phenomena, it
                    is critical to recognize what is relevant at different measures of
                    size, time, and energy and to recognize how changes in scale,
                    proportion, or quantity affect a system’s structure or
                    performance.
                </p>
            
                <p className="tabOver">
                    <strong>Stability and change.</strong> For natural and built systems alike,
                    conditions of stability and determinants of rates of change or
                    evolution of a system are critical elements of study.
                </p>
            
                <h4>Scientific Practices</h4>
                
                <p className="tabOver">
                    <strong>Asking Questions and Defining Problems</strong><br/>
                    “Students at any grade level should be able to ask questions of
                    each other about the texts they read, the features of the
                    phenomena they observe, and the conclusions they draw from
                    their models or scientific investigations. For engineering, they
                    should ask questions to define the problem to be solved and to
                    elicit ideas that lead to the constraints and specifications for its
                    solution.” (NRC Framework 2012, p. 56)
                </p>
            
                <p className="tabOver">
                    <strong>Developing and Using Models</strong><br/>
                    “Modeling can begin in the earliest grades, with students’ models
                    progressing from concrete “pictures” and/or physical scale
                    models (e.g., a toy car) to more abstract representations of
                    relevant relationships in later grades, such as a diagram
                    representing forces on a particular object in a system.” (NRC
                    Framework, 2012, p. 58)
                </p>    

                <p className="tabOver">
                    <strong>Planning and Carrying Out Investigations</strong><br/>
                    “Students should have opportunities to plan and carry out several
                    different kinds of investigations during their K-12 years. At all
                    levels, they should engage in investigations that range from those
                    structured by the teacher—in order to expose an issue or question
                    that they would be unlikely to explore on their own (e.g.,
                    measuring specific properties of materials)— to those that
                    emerge from students’ own questions.” (NRC Framework, 2012,
                    p. 61)
                </p>      

                <p className="tabOver">
                    <strong>Analyzing and Interpreting Data</strong><br/>
                    “Once collected, data must be presented in a form that can reveal
                    any patterns and relationships and that allows results to be
                    communicated to others. Because raw data as such have little
                    meaning, a major practice of scientists is to organize and
                    interpret data through tabulating, graphing, or statistical analysis.
                    Such analysis can bring out the meaning of data—and their
                    relevance—so that they may be used as evidence. Engineers, too,
                    make decisions based on evidence that a given design will work;
                    they rarely rely on trial and error. Engineers often analyze a
                    design by creating a model or prototype and collecting extensive
                    data on how it performs, including under extreme conditions.
                    Analysis of this kind of data not only informs design decisions
                    and enables the prediction or assessment of performance but also
                    helps define or clarify problems, determine economic feasibility,
                    evaluate alternatives, and investigate failures.” (NRC
                    Framework, 2012, p. 61-62)
                </p>     

                <p className="tabOver">
                    <strong>Using Mathematics and Computational Thinking</strong><br/>
                    “Although there are differences in how mathematics and
                    computational thinking are applied in science and in engineering,
                    mathematics often brings these two fields together by enabling
                    engineers to apply the mathematical form of scientific theories
                    and by enabling scientists to use powerful information
                    technologies designed by engineers. Both kinds of professionals
                    can thereby accomplish investigations and analyses and build
                    complex models, which might otherwise be out of the question.”
                    (NRC Framework, 2012, p. 65)
                </p>  

                <p className="tabOver">
                    <strong>Constructing Explanations and Designing Solutions</strong><br/>
                    “The goal of science is the construction of theories that provide
                    explanatory accounts of the world. A theory becomes accepted
                    when it has multiple lines of empirical evidence and greater
                    explanatory power of phenomena than previous theories.”(NRC
                    Framework, 2012, p. 52)
                    “Asking students to demonstrate their own understanding of the
                    implications of a scientific idea by developing their own
                    explanations of phenomena, whether based on observations they
                    have made or models they have developed, engages them in an
                    essential part of the process by which conceptual change can
                    occur. In engineering, the goal is a design rather than an
                    explanation. The process of developing a design is iterative and
                    systematic, as is the process of developing an explanation or a
                    theory in science. Engineers’ activities, however, have elements
                    that are distinct from those of scientists. These elements include
                    specifying constraints and criteria for desired qualities of the
                    solution, developing a design plan, producing and testing models
                    or prototypes, selecting among alternative design features to
                    optimize the achievement of design criteria, and refining design
                    ideas based on the performance of a prototype or
                    simulation.”(NRC Framework, 2012, p. 68-69)
                </p> 

                <p className="tabOver">
                    <strong>Obtaining, Evaluating, and Communicating Information</strong><br/>
                    “Any education in science and engineering needs to develop
                    students’ ability to read and produce domain-specific text. As
                    such, every science or engineering lesson is in part a language
                    lesson, particularly reading and producing the genres of texts that
                    are intrinsic to science and engineering.” (NRC Framework,
                    2012, p. 76)
                </p> 

                <p>
                    <strong>*(NRC Framework 2012)</strong> National Academies of Sciences,
                    Engineering, and Medicine. 2012. A Framework for K-12 Science
                    Education: Practices, Crosscutting Concepts, and Core Ideas.
                    Washington, DC: The National Academies Press.
                    <a href='https://doi.org/10.17226/13165'> https://doi.org/10.17226/13165</a>
                </p>

            </div>
        </div>
    </Layout>
  )
}

export default NewtonStandards
