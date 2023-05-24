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
                
                <p className="prompt">
                    I am a passionate computer science undergraduate who loves to solve complex problems and create innovative
                    solutions. I have a solid foundation in programming languages like Python, Java, C and JavaScript. 
                    My ultimate goal is to use my technical knowledge and creativity to make a positive impact on the world.
                </p>
            </div>

        </div>
    )
}

export default Home;