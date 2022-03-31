import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/DrugTemplate.module.css"
import Footer from '../components/footer'

export default function Ketamine() {
    return (
        <div className={styles.container}>
            <div>  
                    <h1 className={styles.header}>Ketamine</h1>
            </div>
            <div className={styles.imagewithtextflex}>
                <Image src="/ketamineimage.jpg" width={600} height={330}/>
                <p className={styles.flexsidetext}>Ketmamine is a short-acting anesthetic that gives hallucinogenic effects.</p>
            </div>
            <div className={styles.maininfocontainer}>
                <h1 className={styles.centeredsectiontwo}>Important Information</h1>
                <ul className={styles.listmain}>
                    <li data-icon="💊 " className={styles.listitemtext}>Street names:
                        <ul>
                            <li className={styles.listitemtext}>K</li>
                            <li className={styles.listitemtext}>Special K</li>
                            <li className={styles.listitemtext}>Super K</li>
                            <li className={styles.listitemtext}>Kit Kat</li>
                            <li className={styles.listitemtext}>Vitamin K</li>
                            <li className={styles.listitemtext}>Cat Tranquilizer</li>  
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>It is injected as a fluid and made into powders which are snorted, mixed in drinks, or smoked. </li>
                    <li data-icon="💊 " className={styles.listitemtext}>It gives hallucinatory effects that last 30-60 minutes. It distorts sight and sound, induces feelings of calmness and relaxation as well as relief from pain. It causes “trips” and that makes it used as a party drug. Trips can last about 2 hours.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>The only FDA approved form for ketamine is as an antidepressant nasal spray called esketamine.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>Ketamine is usually produced in the US, but it is made in a number of countries. A large portion of the illicit ketamine trade in the US is sourced from legal uses of the drug, as dealers may smuggle ketamine from veterinarians or from across the Mexican border.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>Ketamine is made via chemical processes in labs. </li> 
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>Use can cause unconsciousness, high blood presure, and dangerously slowed breathing in the short term, as well as possible fatality from an overdose, although that is rare. In the long term it can cause ulcers, pain in the bladder, kidney problems, stomach pain, depression, and poor memory.</p> 
            </div>
            <Footer />
            
        </div>
    )
}