import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <div className={styles.footercontainer}>
            <Link href="/lsd" passHref>
                <p className={styles.linktext}>LSD</p>
            </Link>
            <Link href="/pcp" passHref>
                <p className={styles.linktext}>PCP</p>
            </Link>
            <Link href="/magicmushrooms" passHref>
                <p className={styles.linktext}>Magic Mushrooms</p>
            </Link>
            <Link href="/ecstacy" passHref>
                <p className={styles.linktext}>Ecstasy</p>
            </Link>
            <Link href="/ketamine" passHref>
                <p className={styles.linktext}>Ketamine</p>
            </Link>
        </div>
    )
}