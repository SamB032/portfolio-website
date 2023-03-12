import React from 'react';
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello, My name is Sam</h2>
                <div className="prompt">
                    <p>
                        A dedicated, engaged and creative computer science undergraduate.
                        Who is dedicated to applying my knowledge to a workplace enviroment.
                    </p>
                </div>
            </div>

            <div className="skills">
                <h1>Skills</h1>

                    <ol className="list">
                        <li className="item">
                            <h2>Frontend</h2>
                            <span>
                                HTML, CSS, React, JavaScipt, Qt5, NPM
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