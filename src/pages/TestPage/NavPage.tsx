import React from 'react'
import './navPage.styles.css'
const NavPage = () => {
    return (
        <main>
            <section id="1">
                <header>Header 1</header>
            </section>
            <section id="2">
                <header>Header 2</header>
            </section>
            <section id="3">
                <header>Header 3</header>
            </section>
            <footer>
                <a href="#1">section 1</a>
                <a href="#2"> section 2</a>
                <a href="#3">section 3</a>
            </footer>
        </main>
    )
}

export default NavPage