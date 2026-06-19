import styles from './Main.module.css'
import gitLogo from '../icons/github.svg'
import linkedinLogo from '../icons/linkedin.svg'
import soraiaFoto from '../icons/soraiafoto.jpeg'
import soraiaImagem from '../icons/imagemsoraia.jpeg'
import nodeIcon from '../icons/node.svg'
import reactIcon from '../icons/react.svg'

function Main(){
    return(
   <>
   <header>
        <h2 className={styles.codeTitle}>
          console.log("<span className={styles.destaque}>S</span>i<span className={styles.destaque}>Q</span>ue<span className={styles.destaque}>L</span>li")
        </h2>
      </header>
      <main>
         <div className={styles.sectionSocial}>
          <img src={gitLogo} alt="" className={styles.logoIcon}/>
          <img src={linkedinLogo} alt="" className={styles.logoIcon}/>
<br />
         </div>
          <div className={styles.sectionMain}>
            <p className={styles.txtWelcome}>Olá!</p>
            <h2>Prazer, Soraia Siquelli</h2>
            <h1>Desenvolvedora de Software</h1>
            <p className={styles.txtLegenda}>"Ideias não Nascem Prontas"</p>
          </div>
          <div className={styles.sectionImage}>
            <div className={styles.iconFlutuante}>
                <img src={reactIcon} alt="" />
            </div>
            <div className={styles.iconFlutuante}>
              <img src={nodeIcon} alt="" />
            </div>
            <img src={soraiaFoto} alt="" />
          </div>


      </main>
      </>
    )
}

export default Main
