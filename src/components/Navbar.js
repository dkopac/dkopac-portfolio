import React from 'react';
import '../styles/Navbar.css'

const styles = {
    NavStyles: {
        backgroundColor: 'aquamarine',
        color: 'black',
        padding: '10px',
        fontFamily: 'Arial',
        fontSize: '20px',
        textAlign: 'center',
        margin: '0px',
        flexDirection: 'flexbox',
    },
    aStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

function Navbar ({ currentPage, handlePageChange }) {
    return (
        <nav style={styles.NavStyles} className='navbar'>
            <nav className= "nav-item">
                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About </a>

                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio </a>

                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact </a>

                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume </a>
            </nav>
        </nav>
    );
}

export default Navbar;