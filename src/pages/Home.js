import React from 'react';
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello, My name is Sam</h2>
                <div className="prompt">
                    <p>
                    I am a passionate computer science undergraduate who loves to solve complex problems and create innovative
                    solutions. I have a solid foundation in programming languages like Python, Java, C and JavaScript. 
                    My ultimate goal is to use my technical knowledge and creativity to make a positive impact on the world.
                    </p>
                </div>
            </div>

            <div className="skills">
                <h1>Skills</h1>

                    <ol className="list">
                        <li className="item">
                            <h2>Frontend</h2>
                            <span>
                                HTML, CSS, React, JavaScript, Qt5, NPM
                            </span>
                        </li>
                    </ol>

                    <ol className="list">
                        <li className="item">
                            <h2>Backend</h2>
                            <span>
                                SQL, MySQL, SQLite, NodeJS, Java, Python
                            </span>
                        </li>
                    </ol>

                    <ol className="list">
                        <li className="item">
                            <h2>Programming Languages</h2>
                            <span>
                                Python, Java, C, JavaScript
                            </span>
                        </li>
                    </ol> 
            </div>
        </div>
    )
}

export default Home;