import React from 'react';
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello, My name is Sam</h2>
                <div className="prompt">
                    <p>
                        aboutMe.
                    </p>
                </div>
            </div>

            <div className="skills">
                <h1>Skills</h1>
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