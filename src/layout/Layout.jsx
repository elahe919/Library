function Layout({children}) {
    return (
        <>
            <header>
                <p>welcome to my library 📚</p>
            </header>
            {children}
            <footer>made with 🧡</footer>
        </>
    )
}

export default Layout