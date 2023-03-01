import React from 'react'

import { hamburgueres, optionsMenu } from '../../data'
import HamburguerCard from '../HamburguerCard/HamburguerCard';
import ListCard from '../ListCard/ListCard'

import styles from './styles.module.css';


const Menu = () => {
  return (
    <div className={styles.containerMenu}>
      <p className={styles.textSabores} data-aos="zoom-in">Temos diversos sabores para o seu paladar.</p>
      <p className={styles.textCardapio} data-aos="zoom-in">Navegue pelo nosso cardápio. Temos desde os grandes pratos brasileiros até todas as culinárias orientais e árabes.</p>
      <div className={styles.contentHamburguers}>
        <div className={styles.containerLeft} data-aos="zoom-in-down" data-aos-duration="2000">
          {
            optionsMenu.map((option) => (
              <ListCard {...option} key={option.name} />
            ))
          }
        </div>
        <div className={styles.containerRight} data-aos="flip-down" data-aos-duration="2000">
          {hamburgueres.map((hamburguer, index) => (
            <HamburguerCard {...hamburguer} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu