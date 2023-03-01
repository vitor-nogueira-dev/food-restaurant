import React from 'react'

import styles from './styles.module.css';

import stars from '../../assets/stars.png'

const FeedbacksCard = ({ name, profession, image, feedback }) => {
  return (
    <div className={styles.containerFeedbacksCard}>
      <div className={styles.contentClient}>
        <img src={image} alt={name} />
        <div className={styles.contentInfosClient}>
          <p className={styles.nameFeedback}>{name}</p>
          <p>{profession}</p>
        </div>
      </div>
      <img src={stars} alt="estrelas de avaliação" />
      <p>{feedback}</p>
    </div>
  )
}

export default FeedbacksCard