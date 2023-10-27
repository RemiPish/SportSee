import React from 'react';
import './MainPage.scss';

//page accueil contenant les liens vers les deux utilisateurs
export default function MainPage() {
    return (
        <div className='links'>
            <a href="/12">Karl Dovineau</a>
            <a href="/18">Cecilia Ratorez</a>
            <a href="/mock/12">MOCK: Karl Dovineau</a>
            <a href="/mock/18">MOCK: Cecilia Ratorez</a>
        </div>
    )
}