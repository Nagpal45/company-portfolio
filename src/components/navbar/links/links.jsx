const { default: Link } = require("next/link")
import styles from './links.module.css'
export default function Links(){
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ]

    return (
        <div className={styles.links}>
            {links.map ((link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}