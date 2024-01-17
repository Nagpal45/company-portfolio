import Image from 'next/image'
import styles from './singlePost.module.css'

export default function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/9827841/pexels-photo-9827841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Eyes</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="/noavatar.png" alt="" width={50} height={50}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Vaibhav Nagpal</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>17.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum commodi architecto quasi quibusdam maiores quia eaque omnis tenetur veniam maxime! Voluptate doloribus tenetur, dicta magni rem asperiores in cupiditate repudiandae.
        </div>
      </div>
    </div>
  )
}
