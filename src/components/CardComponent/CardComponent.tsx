import React from 'react'
import styles from './CardComponent.module.css'
import { Link, useNavigate } from 'react-router-dom'
import BottomComponent from '../Bottom/BottomComponent';
import LeftComponent from '../Left/LeftComponent';
import { useAppSelector } from '../../hooks/redux';
import TextComponent from '../Text/TextComponent';
import Body from '../Body/Body';

const CardComponent = () => {
  const {step:isStep} = useAppSelector((state)=>state.sliceUrl)
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <LeftComponent/>
        <div className={styles.right}>
              <TextComponent/>
              <Body />
              <BottomComponent />
        </div>
    </div>
  )
}

export default CardComponent