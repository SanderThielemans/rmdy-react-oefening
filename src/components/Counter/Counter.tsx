import React from 'react'
import { Container, Controls, Reset, CustomInput } from './Counter.styles';


const initialCount = 12;

const Counter: React.FC = () => {
    const [count, setCount] = React.useState<number>(initialCount);
    const [customAdder, setCustomAdder] = React.useState<number>(0);

    const addNumber = (adder: number) => {
        const result = count + adder;
        setCount(result % 11 === 0 ? 0 : result);
    }

    const resetNumber = () => {
        setCount(initialCount);
    }

    return (
        <Container>
            <div>
                <p>{count}</p>
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


export default Counter;


