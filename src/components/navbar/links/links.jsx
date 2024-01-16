const { default: Link } = require("next/link")

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
        <div>
            {links.map ((link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}