import React from 'react'


import styles from './styles.module.css';
import shape from '../../assets/shape.png';

const Hero = () => {
  return (
    <div className={styles.containerHero}>
      <div className={styles.contentLeft} data-aos="fade-right">
        <p className={styles.textReserve}>
          <span className={styles.textColor}>Reserve </span>
          a sua mesa e <br />
          <span className={styles.textColor}>Faça </span>
          o seu pedido
        </p>
        <p className={styles.infos}>Coma a comida dos sonhos e com preço acessível. Não quer sair de casa? Realizamos entrega, chegamos em minutos.</p>
      </div>
      <div className='left' data-aos="fade-left">
        <img src={shape} alt="homem mordendo o hamburguer" className={styles.men} />
      </div>
      <div className={styles.contentButtons} data-aos="fade-up">
        <button type='button' className="btnViewCardapio">ver cardápio</button>
        <button type='button' className={styles.btnOrderNow}>pedir agora</button>
      </div>
    </div>
  )
}

export default Hero