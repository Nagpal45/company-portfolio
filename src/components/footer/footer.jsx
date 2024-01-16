import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>devVN</div>
      <div className={styles.text}>
        Vaibhav creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}
