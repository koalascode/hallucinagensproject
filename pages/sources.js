import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/DrugTemplate.module.css"
import Footer from '../components/footer'


export default function Sources() {
    return (
        <div>
            <h1><center>Sources (alphabetically organized)</center></h1>
            <ul className={styles.listmain}>
                        <li data-icon="📝 " className={styles.listitemtext}>betterhealth.vic.gov.au/health/healthyliving/hallucinogens</li>
                        <li data-icon="📝 " className={styles.listitemtext}>dea.gov/sites/default/files/2020-06/Ecstasy-MDMA-2020_0.pdf</li>
                        <li data-icon="📝 " className={styles.listitemtext}>dea.gov/sites/default/files/2020-06/Ketamine-2020.pdf</li>
                        <li data-icon="📝 " className={styles.listitemtext}>dea.gov/sites/default/files/2020-06/LSD-2020_0.pdf</li>
                        <li data-icon="📝 " className={styles.listitemtext}>directory.addicted.org/honorehg-middletown-addiction-crisis-center</li>
                        <li data-icon="📝 " className={styles.listitemtext}>drugabuse.com/drugs/hallucinogens/pcp/history-statistics/</li>
                        <li data-icon="📝 " className={styles.listitemtext}>healthyliferecovery.com/what-are-the-long-term-effects-of-lsd/</li>
                        <li data-icon="📝 " className={styles.listitemtext}>medicalnewstoday.com/articles/297064#adverse-effects-and-risks</li>
                        <li data-icon="📝 " className={styles.listitemtext}>medlineplus.gov/ency/patientinstructions/000797.htm</li>
                        <li data-icon="📝 " className={styles.listitemtext}>nida.nih.gov/publications/drugfacts/hallucinogens</li>
                        <li data-icon="📝 " className={styles.listitemtext}>nida.nih.gov/publications/drugfacts/mdma-ecstasymolly</li>
                        <li data-icon="📝 " className={styles.listitemtext}>phillyvoice.com/philly-fentanyl-overdose-deaths-heroin-meth-pcp-/</li>
                        <li data-icon="📝 " className={styles.listitemtext}>webmd.com/depression/features/what-does-ketamine-do-your-brain</li>
                </ul>
                <br /><br />
                <Footer />
        </div>
    )
}