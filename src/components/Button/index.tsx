import React from "react"


export type HandlerProps = {
    event: React.MouseEvent<HTMLButtonElement>, id: number
}
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    children: string
}
const Button = (props: ButtonProps) => {
    return (
        <button style={{ padding: '1rem' }}
            onClick={(event) => props.handleClick(event, 1)}>{props.children}</button>
    )
}

export default Button