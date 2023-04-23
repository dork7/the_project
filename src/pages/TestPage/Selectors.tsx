import React from 'react'
import './style.css'

const Selectors = () => {
    return (
        <>
            <h1>CSS Selectors and Colors</h1>
            <h2>
                Article 1
            </h2>
            <p className='gray'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odit beatae repellendus incidunt aspernatur impedit? Voluptatem nulla veritatis necessitatibus soluta aliquid iure voluptates eligendi consectetur esse, quasi, explicabo animi inventore commodi est ipsum culpa perspiciatis nihil. Aperiam consectetur sit ipsa quod praesentium, voluptatum quam ullam repellendus culpa sint, qui eos.            </p>
            <h2>
                Article 2
            </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odit beatae repellendus incidunt aspernatur impedit? Voluptatem nulla veritatis necessitatibus soluta aliquid iure voluptates eligendi consectetur esse, quasi, explicabo animi inventore commodi est ipsum culpa perspiciatis nihil. Aperiam consectetur sit ipsa quod praesentium, voluptatum quam ullam repellendus culpa sint, qui eos.            </p>
            <h2>
                Article 3
            </h2>
            <p className='gray'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odit beatae repellendus incidunt aspernatur impedit? Voluptatem nulla veritatis necessitatibus soluta aliquid iure voluptates eligendi consectetur esse, quasi, explicabo animi inventore commodi est ipsum culpa perspiciatis nihil. Aperiam consectetur sit ipsa quod praesentium, voluptatum quam ullam repellendus culpa sint, qui eos.
                <span> I AM A SPAN </span>
            </p>

            <div className='box'>
                I AM A BOX WHICH IS 50% of body's width
                <div className="box">
                    Box inside a box of 50% width
                </div>
            </div>

            <div className="rem-size">
                DEMO OF REM, font size is 2rem, which means it's double the size of root element
            </div>

        </>


    )
}

export default Selectors