import Image from 'next/image'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Full Name' required/>
          <input type="email" placeholder='Email' required/>
          <input type="number" placeholder='Phone Number (optional)'/>
          <textarea cols="30" rows="10" placeholder='message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}
