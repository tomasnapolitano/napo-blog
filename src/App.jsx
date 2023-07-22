import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import styles from "./App.module.css"

const App = () => {
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.appContainer}>
                <Header/>
                <div className={styles.bodyContainer}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default App;