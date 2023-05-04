import React from 'react'

type PersonProps = {
    firstName: string,
    lastName: string,
    personList: {
        name: string,
        age: number
    }[],
    // personList : PersonObject[]
}
type PersonObject = {
    name: string,
    age?: number
}

const Object = (props: PersonProps) => {
    const { firstName, lastName, personList } = props
    return (
        <>
            <h2>Name  {firstName} {lastName} </h2>
            <div>
                {personList.map((item: PersonObject, idx: number) => <p key={idx}>{JSON.stringify(item)}</p>)}
            </div>
        </>
    )
}

export default Object