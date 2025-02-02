import "./Recommendations.scss"; 
import React from "react";
import { Link } from "react-router-dom";
import Venessa from "../../assets/images/Venessa.jpeg"
import Laura from "../../assets/images/Laura.jpeg"
import Sivi from "../../assets/images/Sivi.jpeg"
import Ayesha from "../../assets/images/Ayesha.jpeg"; 

const Recommendations: React.FC = () => {
    return (
        <section className="recommendations">
            <div>
                Recommendations and Collaborations 
            </div>
            <section className="recommendations-card">
                <p>Vanessa Tseng</p>
                <p>Brainstation Software Engineering Graduate</p>
                <img className="recommendations-headshot" src={Venessa} alt="" />
                <p>I had the pleasure of being classmates with Gharsa at BrainStation, where she stood out as a proactive learner, always eager to answer questions in class and volunteer for tasks. I also had the opportunity to collaborate with her on a stock inventory project and she was an absolute joy to work with. Gharsa consistently ensured her tasks were completed on time and demonstrated exceptional communication skills throughout the project.
                    I highly recommend Gharsa to join any team as she would be a valuable member to any workplace.</p>
                <button>Go to the page</button>
            </section>
            <section className="recommendations-card">
                <p>Laura Courtney</p>
                <p>Brainstation Software Engineering Graduate</p>
                <img className="recommendations-headshot" src={Laura} alt="" />
                <p>Gharsa is such an absolute delight to work and learn along side. 

Not only is she extremely intelligent and hard working, but she is also kind and always takes the time to ensure full and clear communication. She is uplifting, motivational and works extremely well with other people. 

She is a natural leader who always steps up to the plate, is not afraid to ask the important questions, and who supports and inspires everyone around her. A true asset to any team and an all around wonderful person.</p>
                <button>Go to the page</button>
            </section>

            <section className="recommendations-card">
                <p>Sivi Rakaj</p>
                <p>Brainstation Software Engineering Graduate</p>
                <img className="recommendations-headshot" src={Sivi} alt="" />
                <p>I’m excited to recommend Gharsa, a talented and dedicated software engineer who has recently graduated. Skilled in Node.js, React.js, and building scalable web applications, Gharsa consistently demonstrated exceptional problem-solving and collaboration abilities during our time working together on different projects during the program. 

Gharsa’s strong technical foundation, innovative mindset, and eagerness to learn make them an excellent fit for any team. I have no doubt they’ll excel in their career and contribute meaningfully to any organization! </p>
                <button>Go to the page</button>
            </section>
            <section className="recommendations-card">
                <p>Ayesha Banu</p>
                <p>Brainstation Software Engineering Graduate</p>
                <img className="recommendations-headshot" src={Ayesha} alt="" />
            <p>I had the pleasure of working alongside Gharsa during our time at BrainStation, and I can confidently say that she is an exceptional individual. She is not only highly knowledgeable in Web Development, but she also has a remarkable ability to communicate complex ideas in an approachable way.

What sets Gharsa apart is her positive attitude and willingness to help others. She is always open to collaboration and provides valuable insights that help elevate the work of those around her. Her work ethic is impeccable, and she consistently delivers high-quality results while maintaining a friendly and supportive demeanor.

Whether working on group projects or having casual discussions, it is clear that Gharsa is someone who brings both intelligence and kindness to any environment. I look forward to seeing her future accomplishments and can’t recommend her enough for any opportunity she pursues.</p>
            </section>





        </section>
    );
};

export default Recommendations;
