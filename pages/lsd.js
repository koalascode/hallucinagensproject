import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/DrugTemplate.module.css"

export default function LSD() {
    return (
        <div className={styles.container}>
            <div>  
                    <h1 className={styles.header}>LSD</h1>
            </div>
            <div className={styles.imagewithtextflex}>
                <Image src="/lsdimage.jpg" width={600} height={330}/>
                <p className={styles.flexsidetext}>LSD is a something something something something something something something somethings something something something something.</p>
            </div>
            <div className={styles.maininfocontainer}>
                <h1 className={styles.centeredsectiontwo}>Important Information</h1>
                <ul className={styles.listmain}>
                    <li data-icon="💊 " className={styles.listitemtext}>Street names:
                        <ul>
                            <li className={styles.listitemtext}>Acid</li>
                            <li className={styles.listitemtext}>Dots</li>
                            <li className={styles.listitemtext}>Mellow yellow</li>
                            <li className={styles.listitemtext}>Window pane</li> 
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>Frequently used on blotter paper. It is also often used in tablets known as microdots, sugar cubes, or in liquid.
                        <ul>
                            <li className={styles.listitemtext}>Despite its many forms, LSD is almost always consumed orally. With blotter paper, it is put under or on the tongue and then sucked on as the drug begins to take effect.</li>
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP is ingested via snorting, injection, smoking, and oral consumption.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP is known as a mind-altering drug, meaning that it will affect your brain and cause shifts in your mood and actions.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>If users overdose, they will experience more severe and longer trips, and occasionally consequences are fatal.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP works by restricting the movement of certain chemicals in a user&apos;s brain. More specifically than a hallucinogen, PCP is also referred to as a dissociative.</li>
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>The major health risks of LSD are something something something something something something something something something. Something something something something something something something something something something something something something something.</p> 
            </div>

            
        </div>
    )
}