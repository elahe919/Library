import styles from "../layout/Layout.module.css"

function Layout({children}) {
    return (
        <>
            <header className={styles.header}>
                <p>Book App</p>
            </header>
            {children}
            <footer className={styles.footer}>made with 🧡</footer>
        </>
    )
}

export default Layout