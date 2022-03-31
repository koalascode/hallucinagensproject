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
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>It is injected as a fluid and made into powders which are snorted, mixed in drinks, or smoked. </li>
                    <li data-icon="💊 " className={styles.listitemtext}>It gives hallucinatory effects that last 30-60 minutes. It distorts sight and sound, induces feelings of calmness and relaxation as well as relief from pain. It causes “trips” and that makes it used as a party drug. Trips can last about 2 hours.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>Use can cause unconsciousness, high blood presure, and dangerously slowed breathing in the short term. In the long term it can cause ulcers, pain in the bladder, kidney problems, stomach pain, depression, and poor memory. </li>
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>When taking LSD, if users overdose, they will experience more severe and longer trips, and occasionally consequences are fatal. According to the DEA, &quot;the ability to make sound judgments and see common dangers is impaired, making the user susceptible to personal injury&quot;. Of course, this can lead to such accidents as car crashes, especially when users are driving under the influence. This is what was seen in our skit. Other long-term risks include a condition known as HPPD, which causes flashbacks to previous highs, and serotonin syndrome, a rare disease that can cause diarrhea, restlessness, and many other negative symptoms.</p> 
            </div>
            <Footer />
            
        </div>
    )
}