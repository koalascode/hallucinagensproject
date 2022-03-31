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
                <p className={styles.flexsidetext}>Magic Mushrooms are a fungi which have psylociben that is obtained from some types of dried or fried mushrooms (these mushrooms are usually found in subtropical regions of South America, Mexico, and the United States).</p>
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
                    <li data-icon="💊 " className={styles.listitemtext}>They are ingested orally, brewed as tea, or added to foods.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>Mushrooms are most commonly imported from subtropical and tropical regions, where they grow naturally. People harvest them, often in large numbers.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>The chemical in mushrooms that causes highs is known as psilocybin, and it can also be extracted from mushrooms and taken straight. When specifically talking about mushrooms, however, the principal physical form is simply the mushrooms themselves, which can be eaten.</li>
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>The short-term high of ingesting mushrooms involves a change in the way your senses are working, though the effects differ based on the health conditions of the person who is ingesting the drug. Other short-term effects are an increase in heart rate and blood pressure, anxiety, and chills. One long-term effect of mushrooms that is debated is potential effects on the fetuses of pregnant women who take mushrooms. Also, ingesting mushrooms with a combination of other drugs may increase health risks for a wide variety of neurological afflictions.</p> 
            </div>
            <Footer />
            
        </div>
    )
}