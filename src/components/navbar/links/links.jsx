"use client"
import { useState } from 'react';
import styles from './links.module.css'
import Navlink from './navLinks/navLinks'
export default function Links(){
    const [open, setOpen] = useState(false);
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
        <div className={styles.container}>
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
        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {
            open && <div className = {styles.mobileLinks}>
            {links.map ((link => (
                <Navlink item={link} key={link.title}/>
            )))}
            </div>
        }
        </div>
    )
}