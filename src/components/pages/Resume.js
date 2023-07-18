import React from 'react';

const styles = {
    resume: {
        background: '#0200f9',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        fontWeight: 'bold',
    },
    divStyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pStyles: {
        width: '50%',
        margin: '1rem',
        fontSize: 'medium',
    },
    resumeStyles: {
        width: '50%',
        margin: '1rem',
        fontSize: 'medium',
    },
    skillsStyles: {
        width: '50%',
        margin: '1rem',
        fontSize: 'medium',
    },
};

export default function Resume() {
    return (
        <div style={styles.resume}>
            <div style={styles.divStyles}>
                <h1>Resume</h1>
                <p style={ styles.pStyles } > Checkout my <a href="https://docs.google.com/document/d/1K5jHN6d8INwFjCzt8LoQtcaaP9xx5qvO941M5XeoV0E/edit?usp=sharing">resume</a> here</p>
                <h2 style={ styles.resumeStyles }>Front-end Skills</h2>
                <ul style={ styles.skillsStyles }>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    </ul>
                <h2 style={ styles.resumeStyles }>Back-end Skills</h2>
                <ul style={ styles.skillsStyles }>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}