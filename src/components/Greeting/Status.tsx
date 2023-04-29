import React from 'react'

type StatusProps = {
    status: 'loading' | 'error' | "ok"
}
const Status = (props: StatusProps) => {
    return (
        <div>Status {props.status}</div>

    )
}

export default Status