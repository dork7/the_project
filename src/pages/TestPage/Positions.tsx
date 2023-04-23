import React from 'react'
import './position.styles.css'
const Positions = () => {
    return (
        <div>
            <div className="outer-container">
                <div className="inner-container">
                    <div className="box absolute">Absolute -  will set the position to its relative parrent | in this case outer box is relative position</div>
                    <div className="box relative">Relative - will be relative to its parent container | without needing to set parent to relative position</div>
                    <div className="box fixed">Fixed</div>
                </div>
                <div className="box sticky">Sticky</div>
            </div>
        </div>
    )
}

export default Positions