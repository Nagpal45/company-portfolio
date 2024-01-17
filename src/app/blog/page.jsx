import Blogpost from '@/components/blogPost/blogPost'
import styles from './blog.module.css'

export default function Blog(){
    return(
        <div className={styles.container}>
            <div className={styles.post}>
            <Blogpost/>
            </div>
            <div className={styles.post}>
            <Blogpost/>
            </div>
            <div className={styles.post}>
            <Blogpost/>
            </div>
            <div className={styles.post}>
            <Blogpost/>
            </div>
            <div className={styles.post}>
            <Blogpost/>
            </div>
        </div>
    )
}