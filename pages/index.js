import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.individualcontainer}>
          <div className={styles.fullpagetextcontainer}>
            <h1 className={styles.firstmain}><center>Hallucinogens</center></h1>
          </div>
          <div className={styles.flexvideowithtext}>
            <video src="/psychadellicsclips.mp4" loop muted autoPlay controls className={styles.mainvideo} />
            <div className={styles.flextextsub}>
              <h4 className={styles.sectiontwotext}>Hallucinogens can make you act in a way that is dangerous to yourself and to the people around you since they alter perceptions of reality.</h4>
            </div>
          </div> 
          <br />
          <div>
            <div className={styles.eachdrugflex}>
              <Image src="/lsdimage.jpg" width={600} height={380} alt="graphic of lsd"/>
              <Link href="/" passHref>
                <p className={styles.drugdescription}>LSD is an orally consumed hallucinagen that is used to experience mood shifts and hallucinations.</p>
              </Link>
            </div>
            <div className={styles.eachdrugflexblack}>
            <Link href="/" passHref>
              <p className={styles.drugdescription}>PCP is a illegal mind-altering drug that triggers hallucinations.</p>
            </Link>
              <Image src="/pcpimage.jpg" width={600} height={380} alt="graphic of lsd"/>
            </div>
            <div className={styles.eachdrugflex}>
              <Image src="/magicmuchroomimage.jpg" width={660} height={380} alt="graphic of lsd"/>
              <Link href="/" passHref>
              <p className={styles.drugdescription}>Magic Mushrooms (psilocybin) are drugs made with some mushrooms that many use to gain deeper understandings of themselves.</p>
              </Link>
            </div>
            <div className={styles.eachdrugflexblack}>
              <Link href="/" passHref>
              <p className={styles.drugdescription}>Ectasy is a synthetic drug which started as a party drug for night clubs but has spread beyond that category. </p>
              </Link>
           
              <Image src="/ectacyimage.jpg" width={600} height={380} alt="graphic of lsd"/>
             
              
            </div>
            <div className={styles.eachdrugflex}>
              <Image src="/ketamineimage.jpg" width={600} height={380} alt="graphic of lsd"/>
              <Link href="/" passHref>
              <p className={styles.drugdescription}>Ketmamine is a short-acting anesthetic that gives hallucinogenic effects. </p>
              </Link>
              
              
            </div>
          </div>
        </div>
     
    </div>
  )
}
