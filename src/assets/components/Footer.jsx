import styles from './Footer.module.css'
import linkedinLogo from '../icons/linkedin.svg'

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Obrigada por visitar meu portfólio!</p>
            <a
                href="https://www.linkedin.com/in/soraia-siquelli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar LinkedIn"
            >
                <img src={linkedinLogo} alt="LinkedIn" className={styles.logoIcon} />
            </a>
        </footer>
    )
}

export default Footer
