import React from 'react';
import './SideNav.scss'
import bike from './../../assets/bike.png';
import dumbell from './../../assets/dumbell.png';
import meditate from './../../assets/meditate.png';
import swim from './../../assets/swim.png';

//affichage SideNav, pas de fonctionnalité
export default function SideNav() {
    return <div className='sideNav'>
        <div className="sidenavDiv">
            <a href="/"><img className="logo" src={bike} alt="logo bike" /></a>
            <a href="/"><img className="logo" src={dumbell} alt="logo dumbell" /></a>
            <a href="/"><img className="logo" src={meditate} alt="logo meditate" /></a>
            <a href="/"><img className="logo" src={swim} alt="logo swim" /></a>
        </div>
        <div className="cr-text">Copyright, SportSee 2023</div>
    </div>
}