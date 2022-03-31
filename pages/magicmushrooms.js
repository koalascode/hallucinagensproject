import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/DrugTemplate.module.css"
import Footer from '../components/footer'

export default function MagicMushrooms() {
    return (
        <div className={styles.container}>
            <div>  
                    <h1 className={styles.header}>Magic Mushrooms</h1>
            </div>
            <div className={styles.imagewithtextflex}>
                <Image src="/magicmuchroomImage.jpg" width={600} height={330}/>
                <p className={styles.flexsidetext}>Magic Mushrooms are a chemical that is obtained from some types of dried or fried mushrooms (these mushrooms are usually found in subtropical regions of South America, Mexico, and the United States). They are ingested orally, brewed as tea, or added to foods.</p>
            </div>
            <div className={styles.maininfocontainer}>
                <h1 className={styles.centeredsectiontwo}>Important Information</h1>
                <ul className={styles.listmain}>
                    <li data-icon="💊 " className={styles.listitemtext}>Street names:
                        <ul>
                            <li className={styles.listitemtext}>Alice</li>
                            <li className={styles.listitemtext}>Boomers</li>
                            <li className={styles.listitemtext}>Caps</li>
                            <li className={styles.listitemtext}>Mushies</li>
                            <li className={styles.listitemtext}>Pizza Toppings</li> 
                            <li className={styles.listitemtext}>Shrooms</li> 
                            <li className={styles.listitemtext}>Tweezes</li> 
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>Magic Mushrooms are often spoken about by celebrities and many promote them to their fans stating that they have gained a deeper understanding of themselves, the list of celebrities includes:
                        <ul>
                            <li className={styles.listitemtext}>Justin Kan (co-founder of Twitch 👾)</li>
                            <li className={styles.listitemtext}>Joe Rogan (famous podcaster 🎤)</li>
                            <li className={styles.listitemtext}>Mike Tyson (🥊🐐)</li>
                            <li className={styles.listitemtext}>and more...</li>
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>People use magic mushrooms for many reasons including: 
                        <ul>
                            <li className={styles.listitemtext}>Recreational Use ⚽️</li>
                            <li className={styles.listitemtext}>Spiritual Pursuits 👐</li>
                            <li className={styles.listitemtext}>Artistic Inspiration 👩‍🎨</li>
                            <li className={styles.listitemtext}>Therapeutic use 🗣</li>
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>People who ingest LSD do so in order to experience mood shifts and visual hallucinations. During periods of hallucination, users of the drug will experience impacted perception of both time and their surroundings.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>If users overdose, they will experience more severe and longer trips, and occasionally consequences are fatal.</li>
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>The major health risks of LSD are something something something something something something something something something. Something something something something something something something something something something something something something something.</p> 
            </div>
            <Footer />
            
        </div>
    )
}