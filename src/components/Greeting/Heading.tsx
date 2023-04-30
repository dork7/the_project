import React from 'react'


type HeadingProps = {
    // children: string
    children: React.ReactNode
}
const Heading = (props: HeadingProps) => {
    return (
        <div style={{ border: '1px solid black', padding: '1rem' }}>{props.children}</div>
    )
}

export default Heading