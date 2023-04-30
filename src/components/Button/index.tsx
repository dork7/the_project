import React from "react"


export type HandlerProps = {
    event: React.MouseEvent<HTMLButtonElement>, id: number
}
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    children: string
}
const Button = ({ handleClick, children }: ButtonProps) => {
    return (
        <button style={{ padding: '1rem' }}
            onClick={(event) => handleClick(event, 1)}>{children}</button>
    )
}

export default Button