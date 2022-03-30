import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.individualcontainer}>
          <div className={styles.fullpagetextcontainer}>
          <Link href="/generalinfo" passHref>
            <h1 className={styles.firstmain}><center>Hallucinogens</center></h1>
            </Link>
          </div>
          <div className={styles.flexvideowithtext}>
            <video src="/psychadellicsclips.mp4" loop muted autoPlay className={styles.mainvideo} />
            <div className={styles.flextextsub}>
              <h4 className={styles.sectiontwotext}>Hallucinogens can make you act in a way that is dangerous to yourself and to the people around you since they alter perceptions of reality.</h4>
            </div>
          </div> 
          <br />
          <div>
            <div className={styles.eachdrugflex}>
              <Image src="/lsdimage.jpg" width={600} height={380} alt="graphic of lsd"/>
             
                <p className={styles.drugdescription}><Link href="/lsd" passHref><b className={styles.linkedtext}>LSD</b></Link> is an orally consumed hallucinagen that is used to experience mood shifts and hallucinations.</p>
              
            </div>
            <div className={styles.eachdrugflexblack}>
           
              <p className={styles.drugdescription}><Link href="/" passHref><b className={styles.linkedtext}>PCP</b></Link> is a illegal mind-altering drug that triggers hallucinations.</p>
            
              <Image src="/pcpimage.jpg" width={600} height={380} alt="graphic of lsd"/>
            </div>
            <div className={styles.eachdrugflex}>
              <Image src="/magicmuchroomImage.jpg" width={660} height={380} alt="graphic of lsd"/>
              
              <p className={styles.drugdescription}><Link href="/" passHref><b className={styles.linkedtext}>Magic Mushrooms</b></Link> (psilocybin) are drugs made with some mushrooms that many use to gain deeper understandings of themselves.</p>
             
            </div>
            <div className={styles.eachdrugflexblack}>
              
              <p className={styles.drugdescription}><Link href="/" passHref><b className={styles.linkedtext}>Ectasy</b></Link> is a synthetic drug which started as a party drug for night clubs but has spread beyond that category. </p>
              
              <Image src="/ectacyimage.jpg" width={600} height={380} alt="graphic of lsd"/>
            </div>
            <div className={styles.eachdrugflex}>
              <Image src="/ketamineimage.jpg" width={600} height={380} alt="graphic of lsd"/>
              
              <p className={styles.drugdescription}><Link href="/" passHref><b className={styles.linkedtext}>Ketmamine</b></Link> is a short-acting anesthetic that gives hallucinogenic effects. </p>
              
            </div>
          </div>
          <Footer />
        </div>
     
    </div>
  )
}
