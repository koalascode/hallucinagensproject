import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/DrugTemplate.module.css"
import Footer from '../components/footer'

export default function PCP() {
    return (
        <div className={styles.container}>
            <div>  
                    <h1 className={styles.header}>PCP</h1>
            </div>
            <div className={styles.imagewithtextflex}>
                <Image src="/pcpimage.jpg" width={600} height={330}/>
                <p className={styles.flexsidetext}>PCP is a dissociative hallucinogenic drug that leads to euphoric hallucinations, and can often cause numbness, anxiety, and other health risks.</p>
            </div>
            <div className={styles.maininfocontainer}>
                <h1 className={styles.centeredsectiontwo}>Important Information</h1>
                <ul className={styles.listmain}>
                    <li data-icon="💊 " className={styles.listitemtext}>Street names:
                        <ul>
                            <li className={styles.listitemtext}>Angel dust</li>
                            <li className={styles.listitemtext}>Embalming fluid</li>
                            <li className={styles.listitemtext}>Hog</li>
                            <li className={styles.listitemtext}>Killer weed</li>
                            <li className={styles.listitemtext}>Love boat</li>
                            <li className={styles.listitemtext}>Ozone</li>
                            <li className={styles.listitemtext}>Peace pill</li>
                            <li className={styles.listitemtext}>Rocket fuel</li>
                            <li className={styles.listitemtext}>Super grass</li>
                            <li className={styles.listitemtext}>Wack</li>

                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP is known as a mind-altering drug, meaning that it will affect your brain and cause shifts in your mood and actions.
                        <ul>
                            <li className={styles.listitemtext}>PCP&apos;s subsequent hallucinations affect your sight and vision. PCP is also a dissociative drug, meaning it makes you feel disconnected from the world, and it can cause a euphoric feeling during the high.</li>
                            <li className={styles.listitemtext}>Many users of PCP experience feelings of strength and invincibility.</li>
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP is usually a white powder that is often in a solution of alcohol or water, and it can be bought in both powder and liquid form. It may also be bought as a tablet or capsule.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP is ingested via snorting, injection, smoking, and oral consumption.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP is made in illicit laboratories, with most coming from Southern California. There is also pharmaceutical PCP that has made its way into the illegal drug market. Nonetheless, it is still being used medically in veterinary practices.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>PCP works by restricting the movement of certain chemicals in a user&apos;s brain.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>It is manufactured using chemical processes.</li>
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>PCP can cause much numbness throughout a user&apos;s body, and anxious and violent tendencies may result from larger doses. PCP may also cause a rise in heart rate, and due to its analgesic effects, users won’t feel pain if they are severely injured during a high. Long-term health risks include memory loss and difficulty thinking, and speech may become unclear for prolonged users of the drug.</p> 
            </div>

            <Footer />
        </div>
    )
}