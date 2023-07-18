import React from 'react';
import '../../styles/About.css'


const styles = {
    about: {
        backgroundColor: 'aquamarine',
        color: 'black',
        padding: '10px',
        fontFamily: 'Arial',
        fontSize: '15px',
        textAlign: 'center',
        margin: '0px'
    },
    imgStyles: {
        width: '25%',
        height: '25%',
        margin: '1rem',
        border: 'none',
        borderRadius: '5px',
        padding: '0.5rem',
    },
    pStyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default function About() {
    return (
        <div style={styles.about}>
            <img style={ styles.imgStyles } src="/images/IMG_0234.jpeg" alt="Ready for Work" />
            <div class="container" style={ styles.pStyles }>
                I am a Full Stack Web Developer with a background in Retail Management with a Full Stack Web Development Bootcamp Certificate from Case Western Reserve University.
                I am a hard working and dedicated individual who is always looking to learn and grow. 
                I am a team player who is always willing to help others and I am always looking for ways to improve myself and the team.
                I am a quick visual learner who will go the extra mile to make sure the job gets done right and on time.
            </div>
        </div>
    );
}