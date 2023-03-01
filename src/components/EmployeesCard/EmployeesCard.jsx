import React from 'react'

import styles from './styles.module.css';

import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const EmployeesCard = ({ name, image, cargo }) => {
  return (
    <div className={styles.containerCardEmployees}>
      <img src={image} alt={name} className={styles.imgEmployees} />
      <div className={styles.containerInfosEmployees}>
        <p className={styles.nameEmployees}>{name}</p>
        <p className={styles.cargoEmployees}>{cargo}</p>
        <div className={styles.containerIcons}>
          <img src={whatsapp} alt="icon whatsapp" />
          <img src={facebook} alt="icon facebook" />
          <img src={instagram} alt="icon instagram" />
        </div>
      </div>
    </div>
  )
}

export default EmployeesCard