import styles from './Header.module.css'

function Header({tituloSecao}){
    return(
        <header className={styles.headerComponent}>
            <h2>
                {tituloSecao}
            </h2>
            <span ></span>
        </header>
    )
}

export default Header