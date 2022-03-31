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
                    <li data-icon="💊 " className={styles.listitemtext}>Frequently used on blotter paper. It is also often used in tablets known as microdots, sugar cubes, or in liquid.
                        <ul>
                            <li className={styles.listitemtext}>Despite its many forms, LSD is almost always consumed orally. With blotter paper, it is put under or on the tongue and then sucked on as the drug begins to take effect.</li>
                        </ul>
                    </li>
                    <li data-icon="💊 " className={styles.listitemtext}>LSD is most often produced in illicit, underground laboratories across the US.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>People who ingest LSD do so in order to experience mood shifts and visual hallucinations. During periods of hallucination, users of the drug will experience impacted perception of both time and their surroundings.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>If users overdose, they will experience more severe and longer trips, and occasionally consequences are fatal.</li>
                    <li data-icon="💊 " className={styles.listitemtext}>“The ability to make sound judgments and see common dangers is impaired, making the user susceptible to personal injury” (DEA).</li>
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