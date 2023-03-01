import React from 'react'

import styles from './styles.module.css';

const ListCard = ({ image, name, isSelected }) => {
  return (
    <div className={ isSelected ? styles.listSelected : styles.cardsList}>
      <img src={image} alt={name} />
      <p className={styles.nameCategorys}>{name}</p>
    </div>
  )
}

export default ListCard