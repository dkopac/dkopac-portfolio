import React from 'react';

const styles = {
    header: {
        backgroundColor: 'aquamarine',
        color: 'black',
        padding: '10px',
        fontFamily: 'Arial',
        fontSize: '30px',
        textAlign: 'center',
        margin: '0px'
    }
}

export default function Header() {
    return (
        <header style={styles.header}>
            <h1>Daniel Kopac</h1>
        </header>
    )
}

