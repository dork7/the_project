import React from 'react'
import './typo.styles.css'
const Typography = () => {
    return (
        <div>
            <h2>Typogprahy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni iste, aut fugit minima repellat nemo illo ut cupiditate officiis in autem?</p>
            <form action="">
                <label htmlFor="name">Enter your name</label>
                <input type="text" placeholder='enter name' id="name" />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Typography