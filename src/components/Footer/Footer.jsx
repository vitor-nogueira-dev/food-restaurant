import React from 'react'

import styles from './styles.module.css';
import logoBranca from '../../assets/logoBranca.png'
import envelope from '../../assets/envelope.png'
import viber from '../../assets/viber.png'
import whatsappBranco from '../../assets/whatsappBranco.png'

const Footer = () => {
  return (
    <><div className={styles.containerFooter}>
      <div>
        <img src={logoBranca} alt="logo branca" />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.containerNavigation}>
          <p className={styles.title}>
            navegação
          </p>
          <ul className={styles.containerListItems}>
            <li>Home</li>
            <li>Delivery</li>
            <li>Cardápio</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className={styles.containerContato}>
          <p className={styles.title}>
            contato
          </p>
          <div className={styles.contentContato}>
            <img src={envelope} alt="" />
            <p>exemplo@gmail.com</p>
          </div>
          <div className={styles.contentContato}>
            <img src={viber} alt="" />
            <p>81 99764-5036</p>
          </div>
          <div className={styles.contentContato}>
            <img src={whatsappBranco} alt="" />
            <p>+55 8199764-5036</p>
          </div>
        </div>
        <div className={styles.containerNewsLetter}>
          <p className={styles.title}>
            news letter
          </p>
          <input type="text" placeholder='Digite seu nome' />
          <input type="text" placeholder='Digite seu e-mail' />
          <button type='button'>enviar</button>
        </div>
      </div>
    </div>
      <div className={styles.design}>Copyright ©  <span className={styles.color}>  2023.</span> Todos os direitos reservados. Design desenvolvido por <a href="https://www.linkedin.com/in/jonas-nunes-a30b57138/" target="_blank">Jonas Nunes</a>
      </div>
    </>
  )
}

export default Footer