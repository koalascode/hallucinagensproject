import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/DrugTemplate.module.css"
import Footer from '../components/footer'

export default function Ecstasy() {
    return (
        <div className={styles.container}>
            <div>  
                    <h1 className={styles.header}>Ecstasy</h1>
            </div>
            <div className={styles.imagewithtextflex}>
                <Image src="/ectacyimage.jpg" width={600} height={390}/>
                <p className={styles.flexsidetext}>Ecstasy, or MDMA (methylenedioxymethamphetamine), is a synthetic drug that alters mood and perception. It is produced in clandestine labs primarily in Canada and a bit in the Netherlands. </p>
            </div>
            <div className={styles.maininfocontainer}>
                <h1 className={styles.centeredsectiontwo}>Important Information</h1>
                <ul className={styles.listmain}>
                    <li data-icon="💊" className={styles.listitemtext}>Street names:
                        <ul>
                            <li className={styles.listitemtext}>Molly</li>
                            <li className={styles.listitemtext}>XTC</li>
                            <li className={styles.listitemtext}>E</li>
                            <li className={styles.listitemtext}>Beans</li> 
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>Ecstasy produces feelings of increased energy, pleasure, emotional warmth, and a distorted sense of time perception and sensory inputs. </li>
                    <li data-icon="💊 " className={styles.listitemtext}>Most people take MDMA as a capsule or tablet, although some take it in liquid form or snort the powder. </li>
                    <li data-icon="💊 " className={styles.listitemtext}>Some people take MDMA with other drugs like alcohol or marijuana, with many thinking that it is safer than other drugs, but that is a dangerous misconception.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>MDMA affects 3 chemicals in the brain: Dopamine 🗣, Norepinephrine 🫀, and Serotonin 😀😴. </li>
                </ul>
            </div>
                
            <div className={styles.riskscontainer}>
                <h1 className={styles.centeredsectiontwo}>Health Risks</h1>
                <p className={styles.risksmain}>High doses of MDMA can affect the body&apos;s ability to regulate temperatures, this can cause spikes in temperature which can in turn cause liver, kidney, or heart failure or even death. Like all other hallucinogens, it alters perceptions of reality, meaning that the user is at risk of harming themselves and others due to their distorted perception of reality.</p> 
            </div>
            <Footer />
            
        </div>
    )
}