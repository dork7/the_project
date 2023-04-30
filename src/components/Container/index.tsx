import React from 'react'


type ContainerProp = {
    styles: React.CSSProperties
    // children: string
    children: React.ReactNode
}
const Container = (props: ContainerProp) => {
    return (
        <div style={props.styles}>{props.children}</div>
    )
}

export default Container