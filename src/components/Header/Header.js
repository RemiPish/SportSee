import React from 'react';
import logo from './../../assets/logo.png'
import './Header.scss'



//l'entete des pages du site contentant le logo et les liens vers les pages 
export default function Header() {
   return <div className='headerNav'>
      <a href="/" className="headerLogoDiv">
         <img className="logo" src={logo} alt="logo kasa" />
      </a>
      <div className="navDiv">
         <a href="/">Accueil</a>
         <a href="/">Profil</a>
         <a href="/">Réglage</a>
         <a href="/">Communauté</a>
      </div>

   </div>
}