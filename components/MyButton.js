import React from 'react';
import styles from '../styles/Home.module.css'

const button=({label, onClick})=> {
    return (
        <button onClick={onClick}>
            <p>{label}</p>
        </button>
    );
}

export default button;