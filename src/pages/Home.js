import React from 'react';
import '../styles/Home.css'
    
function Home() {
    return (
        <div className="home">
            <div className="about">
                <div>
                    <p className="intro">Hello, My name is ...</p>
                    <p className="name">Sam.</p>
                    <p className="statement">I'm a Computer Science Undergraduate.</p>
                </div>
                
                <div className="prompt">
                    <p>
                      I’m a DevOps Engineer passionate about automation, cloud-native technologies, and building scalable, resilient infrastructure. I specialise in CI/CD, container orchestration, cloud platforms, services and tooling.
                    </p>

                    <p>
                      With experience across startup and enterprises, I’ve worked on building full-scale applications, optimising workflows, improving improving security, and enhancing developer productivity.
                    </p>

                    <p>
                      Outside of work, you’ll find me at the gym, capturing moments through photography, exploring the outdoors, flying simulators, or "when adventure calls" roaming Hyrule in search of new discoveries.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
