import React from 'react'

import styles from './styles.module.css';
import massa from '../../assets/massa.png'
const Promotions = () => {
  return (
    <div className={styles.containerPromotions}>
      <div className={styles.containerLeft}
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine">
        <p className={styles.titlePromotions}>Grandes ofertas do dia.</p>
        <p className={styles.textPromotions}>
          Venha nos visitar e experimente a nossa culinária incrível. não perca a chance de aproveitar as nossas grandes ofertas do dia!
        </p> <br />
        <p className={styles.textPromotions}>Aproveite os melhores pratos do nosso cardápio com preços imperdíveis.</p>

        <button className='btnViewCardapio'>ver cardápio</button>
      </div>
      <div className={styles.containerRight}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className={styles.textPercent}>-45%</div>
        <img src={massa} alt="prato de massa" className={styles.foodMassa} />
      </div>
    </div>
  )
}

export default Promotions