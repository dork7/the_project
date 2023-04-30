import React, { useState } from 'react'
import Greeting from '../../components/Greeting'
import Object from '../../components/Greeting/Object'
import Status from '../../components/Greeting/Status'
import Heading from '../../components/Greeting/Heading'
import Button from '../../components/Button'

const Dashboard = () => {

    const testArr: number[] = [1, 2, 3, 4, 5]
    const messageCount: number = 12

    const personList = [
        { name: "dev", age: 20 },
        { name: "dev2", age: 123 },
        { name: "dev2", age: 123 },
        { name: "dev3", age: 123 },
        { name: "dev4", age: 123 },
        { name: "dev5", age: 123 },
    ]

    const [btnClickTxt, setBtnClickTxt] = useState('')

    const btnClicked:
        (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
        = (event, id) => {
            console.log('event', event)
            setBtnClickTxt(`Id passed from parent is ${id}`)
        }


    return (
        <div>

            {/* <Greeting name={"lol"} /> */}
            <Greeting   {...{ testArr, messageCount, ...{ name: "lol", isValid: true } }} />
            <Object {...{ firstName: "person", lastName: "last", personList }} />

            <Status status='error' />
            <Heading>
                <p>
                    I am passed form main file, as a p tag
                </p>
            </Heading>
            <Button handleClick={btnClicked}>
                Click me
            </Button>
            <p>{btnClickTxt}</p>

        </div >
    )
}

export default Dashboard