import styles from './Header.module.css'
import Navbar from './Navbar';

const Header = () => {

    return(
        <div className={styles.headerContainer}>
            <h2>tomas napolitano</h2>
            <Navbar/>
        </div>
    )
}

export default Header;