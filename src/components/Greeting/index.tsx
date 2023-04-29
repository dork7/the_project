import React from 'react'


export type GreetingProps = {
  name: string,
  testArr?: number[],
  messageCount?: number,
  isValid: boolean,
}
const Greeting = (props: GreetingProps) => {
  const { name, testArr, messageCount, isValid } = props
  return (
    <div>
      <p>
        Name: {name}
      </p>
      <p>
        ARR:  {JSON.stringify(testArr)}
      </p>
      <p>
        Number  {messageCount}
      </p>
      <p>
        isValid  {isValid}
      </p>
    </div>
  )
}

export default Greeting