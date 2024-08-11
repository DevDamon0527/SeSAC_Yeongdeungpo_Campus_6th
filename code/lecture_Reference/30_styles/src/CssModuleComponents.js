import React from 'react'
import styles from './styles/cssModule.module.css'

// CSS module
// 클래스명 중복 방지
export default function CssModuleComponents() {
    console.log(styles);
    // 새로운 값 부여
    
  return (
    <div className={styles.container}>
          <div className={[styles.box, styles.red].join(' ')}>1</div>
          <div className={[styles.box, styles.orange].join(' ')}>2</div>
          <div className={`${styles.box} ${styles.yellow}`}>3</div>
    </div>
  )
}
