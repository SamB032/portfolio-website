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
                    I love to solve complex problems and create innovative solutions. My ultimate goal is to use my technical knowledge and creativity to make a positive impact on the world.
                    </p>
                    <p>
                    I'm currently studying at the University of Bath. During my first year, we covered essential Computer Science topics such as Artificial Intelligence, System Architecture,
                    Principles of Programming and Mathematics needed for Computation. I have a solid foundation in programming languages like Python, Java, C and JavaScript. You can check the projects page
                    for some cool things, or read up on my LinkedIn page.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home;