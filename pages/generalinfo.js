import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/GeneralInfo.module.css"
import Footer from '../components/footer'


export default function General() {
    return (
        <div className={styles.container}>
            <div>
               <Image src="/screenshot.png" width={790} height={630} layout="responsive" className={styles.mainimage}/> 
            </div>
            <Footer />
        </div>
    )
}