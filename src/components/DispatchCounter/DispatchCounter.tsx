import React from 'react'
import { Container, Controls, Reset, CustomInput } from './Counter.styles';
import { counterReducer } from './CounterReducer';


//Uee useReducer
const initialCount = 12;

const DispatchCounter: React.FC = () => {
    const [state, dispatch] = React.useReducer(counterReducer, {count: initialCount});
    const [customAdder, setCustomAdder] = React.useState<number>(0);

    const addNumber = (adder: number) => {
        dispatch({type: 'counter.add', payload: adder});
    }

    const resetNumber = () => {
        dispatch({type: 'counter.set', payload: initialCount});
    }

    return (
        <Container>
            <div>
                <p>{state.count}</p>
            </div>
            <Controls>
                <button onClick={e => addNumber(-5)}> -5 </button>
                <button onClick={e => addNumber(-1)}> -1 </button>
                <button onClick={e => addNumber(1)}> +1 </button>
                <button onClick={e => addNumber(5)}> +5 </button>
            </Controls>
            <Reset onClick={e => resetNumber()}> RESET</Reset>
            <CustomInput>
                <input type='number' value={customAdder} onChange={e => setCustomAdder(Number(e.target.value))} />
                <button onClick={e => addNumber(customAdder)}>ADD</button>
            </CustomInput>
        </Container>
    )
}


export default DispatchCounter;


