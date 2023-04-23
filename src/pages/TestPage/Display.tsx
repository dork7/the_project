import React from 'react'
import './display.styles.css'
const Display = () => {
    return (
        <main>
            <p>This is a paragraph. display is block</p>
            <p>This is <span className='opposite'>
                span is inline </span> paragraph.</p>

            <p>By Default block components will stack on eact other</p>

            <p> Inline elements donot stack, do not create new line.You can't give hieght to inline component, you have to convert it into inline-block display</p>

            <p>Inline-display helps to avoid stacking and still gives us the option to apply height and other css features like padding</p>

            <nav>
                <ul>
                    <li><a href="#">Intro</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </nav>
        </main>
    )
}

export default Display