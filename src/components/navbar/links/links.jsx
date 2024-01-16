import styles from './links.module.css'
import Navlink from './navLinks/navLinks'
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

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map ((link => (
                <Navlink item={link} key={link.title}/>
            )))}
            {
                session ? (
                    <>
                    {
                        isAdmin && (
                            <Navlink item = {{title: "Admin", path: "/admin"}}/>
                        )
                    }
                    <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <Navlink item = {{title: "Login", path: "/login"}} />
                )
            }
        </div>
    )
}