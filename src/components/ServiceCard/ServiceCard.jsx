import React from 'react'

import styles from './styles.module.css';

const ServiceCard = ({ icon, name }) => {
  return (
    <div className={styles.cards}>
      <img src={icon} alt="icone do serviço" />
      <p className={styles.titleServices}>{name}</p>
    </div>
  )
}

export default ServiceCard