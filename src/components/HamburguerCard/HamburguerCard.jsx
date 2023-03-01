import React from 'react'

import styles from './styles.module.css';


const HamburguerCard = ({ image, isSelected }) => {
  return (
    <div className={styles.cardHamburguer}>
      <img src={image} alt="Hambúrguer" />
      <div className={isSelected ? 'selected' : styles.contentInfos}>
        <p className={styles.title}>Hamburguer Splet</p>
        <p className={styles.textContent}>2x carne 80g, Pão especial da casa, Salada, Queijo coalho e ovo.</p>
        <div className={styles.footerInfos}>
          <span>R$ 28,70</span>
          <button className={isSelected ? styles.btnSelected : styles.btnAsk}>Pedir</button>
        </div>
      </div>
    </div>
  )
}

export default HamburguerCard