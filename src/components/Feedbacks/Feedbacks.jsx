import React from 'react'

import styles from './styles.module.css';

import frango from '../../assets/frango.png'
import setaLeft from '../../assets/setaLeft.png'
import setaRight from '../../assets/setaRight.png'
import { feedbacks } from '../../data';

import FeedbacksCard from '../FeedbacksCard/FeedbacksCard';

const Feedbacks = () => {
  return (
    <div className={styles.containerFeedbacks}>
      <div className={styles.containerFoods}>
        <img src={frango} alt="coxas de frango" className={styles.imgFrango} data-aos="zoom-in-left" data-aos-duration="2000" />
      </div>
      <div className={styles.containerRight}>
        <p className={styles.titleFeedback}>Feedback dos clientes</p>
        <div className={styles.feedbacks} data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="2000">
          {
            feedbacks.map((feedback) => (
              <FeedbacksCard {...feedback} key={feedback.name} />
            ))
          }
        </div>
        <div className={styles.contentSetas}>
          <img src={setaLeft} alt="seta left" />
          <img src={setaRight} alt="seta right" />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks