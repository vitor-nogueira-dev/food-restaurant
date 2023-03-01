import React from 'react'

import styles from './styles.module.css';

import setaLeft from '../../assets/setaLeft.png'
import setaRight from '../../assets/setaRight.png'
import EmployeesCard from '../EmployeesCard/EmployeesCard';
import { employess } from '../../data';

const Employees = () => {
  return (
    <div className={styles.containerEmployees} data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
      <p className={styles.titleEmployees}>Nosso time</p>
      <div className={styles.contentEmployees}>
        {
          employess.map((employee) => (
            <EmployeesCard  {...employee} key={employee.name} />
          ))
        }
      </div>
      <div className={styles.contentSetas}>
        <img src={setaLeft} alt="icon seta left" className={styles.seta} />
        <img src={setaRight} alt="icon seta right" />
      </div>
    </div>
  )
}

export default Employees