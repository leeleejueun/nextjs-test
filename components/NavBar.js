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
        <Link legacyBehavior href="/"><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link>
        <Link legacyBehavior href="/about"><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
        <style jsx>{`
            a{
                text-decoration: none;
            }
            .active{
                color:tomato;
            }
        `}</style>
        
    </nav>
    )
}