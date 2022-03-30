import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/GeneralInfo.module.css"


export default function General() {
    return (
        <div className={styles.container}>
            <div>
                <h3>Hallucinagenic drugs change a person's percentions of reality. They are sometimes refered to as "psychodelic drugs" as they can make people feel, see, and hear things that are not real, anr/or distort their understandings of what is real.</h3>
            </div>
        </div>
    )
}