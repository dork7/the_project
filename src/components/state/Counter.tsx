import { useReducer } from 'react'


type CounterType = {
    count: number
}


type UpdateAction = { type: `add` | `sub`, payload?: number }
type ResetAction = { type: `reset` }
type CounterAction = UpdateAction | ResetAction




const initialState = { count: 0 }
const CounterReducer = (state: CounterType, action: CounterAction) => {
    switch (action.type) {
        case 'add':
            return { count: state.count + action.payload }
        case 'sub':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            state
    }



}

const Counter = () => {

    const [state, dispatch] = useReducer<any>(CounterReducer, initialState)


    return (
        <div style={{
            margin: '2px',
            padding: '2px',
            border: "2px solid black"
        }}>
            <p>DEMO OF TYPES IN USE REDUCER HOOK</p>
            <button onClick={() => dispatch({ payload: 1, type: 'sub' })}>
                Sub
            </button>
            <span >
                {state?.count}
            </span>

            <button onClick={() => dispatch({ payload: 1, type: 'add' })}>
                Add
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>

        </div>
    )
}

export default Counter