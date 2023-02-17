import Link from "next/link"
import { useRouter } from "next/router"
// import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return(
    <nav>
        {/* module.css 
        <Link href="/" className={`${styles.link} ${router.pathname ==='/' ? styles.active : ""}`}>Home</Link>
        <Link href="/about" className={[styles.link, router.pathname ==='/about' ? styles.active : ""].join(" ")}>About</Link>*/}
        
        {/* styles jsx  a태그를 같이 쓸수있는 방법은 있으나 권장하지 않음 */}
        <Link legacyBehavior href="/"><a>Home</a></Link>
        <Link legacyBehavior href="/about"><a>About</a></Link>
        <style jsx>{`
            nav{
                background-color : tomato;
            }
            a{
                text-decoration: none;
            }
        `}</style>
    </nav>
    )
}