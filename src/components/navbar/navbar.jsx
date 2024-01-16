import Link from "next/link";
import Links from "./links/links";
import styles from'./navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
    <Link href="/" className={styles.logo}>devVN</Link>
    <div>
        <Links/>
    </div>
    </div>
  )
}
