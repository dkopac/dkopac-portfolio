import React, { useState } from 'react';

const styles = {
    contact: {
        background: '#0200f9',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '50%',
        height: '2rem',
        margin: '1rem',
        border: 'none',
        borderRadius: '5px',
        padding: '0.5rem',
        fontSize: 'medium',
    },
    textarea: {
        width: '50%',
        height: '10rem',
        margin: '1rem',
        border: 'none',
        borderRadius: '5px',
        padding: '0.5rem',
    },
    button: {
        width: '25%',
        height: '2rem',
        margin: '1rem',
        border: 'none',
        borderRadius: '5px',
        padding: '0.5rem',
        fontSize: 'medium',
    },
};

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');
    }

    return (
        <div style={styles.contact}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input style={styles.input} type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input style={styles.input} type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea style={styles.textarea} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button style={styles.button} type='submit'>Submit</button>
            </form>
        </div>
    );
}