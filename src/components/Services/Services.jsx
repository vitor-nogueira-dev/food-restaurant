import React from 'react'

import comida from '../../assets/comida.png'
import ServiceCard from '../ServiceCard/ServiceCard'
import { services } from '../../data'
import styles from './styles.module.css';

export const Services = () => {
  return (
    <div className={styles.containerServices} >
      <div className='left' data-aos="flip-right" data-aos-duration="2000">
        <img src={comida} alt="prato de refeição" className={styles.food} />
      </div>
      <div className={styles.containerRight} data-aos="fade-left" data-aos-duration="1000">
        <p className={styles.textDelivery}>
          Entregamos nas seguintes regiões: Jaboatão dos Guararapes, Recife e Cabo.
        </p>
        <p className={styles.textContent}>
          Uma variedade de alimentos com menos sal, açucares e totalmente naturais, sem adições de industrializados, é essencial para uma comida saborosa e saudável.
        </p>
        <button className="btnViewCardapio">ver cardápio</button>
        <div className={styles.containerCards}>
          {services.map((service) => (
            <ServiceCard {...service} key={service.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
