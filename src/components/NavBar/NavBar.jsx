import React from 'react'

import logo from '../../assets/logo.png'

import styles from './styles.module.css';

const NavBar = () => {
  return (
    <div className={styles.containerNavBar}>
      <img src={logo} alt="logo restaurante food" className={styles.logo} />
      <ul className={styles.containerList}>
        <li className={styles.titleHome}>Home</li>
        <li>Delivery</li>
        <li>Cardápio</li>
        <li>Contato</li>
      </ul>
      <button type='button'>Pedir agora</button>
    </div>
  )
}

export default NavBar