import styles from "../layout/Layout.module.css"

function Layout({children}) {
    return (
        <>
            <header className={styles.header}>
                <p>welcome to my library 📚</p>
            </header>
            {children}
            <footer className={styles.footer}>made with 🧡</footer>
        </>
    )
}

export default Layout