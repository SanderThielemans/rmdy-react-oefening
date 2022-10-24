import React from 'react'
import { Container, Controls, Reset, CustomInput } from './Counter.styles';


const intialCount = 12;

const Counter: React.FC = () => {

    const [count, setCount] = React.useState<number>(intialCount)

    return (
        <Container>
            <div>
                <p>{count}</p>
            </div>
            <Controls>
                <button> -5 </button>
                <button> -1 </button>
                <button> +1 </button>
                <button> +5 </button>
            </Controls>
            <Reset>RESET</Reset>
            <CustomInput>
                <input type='number'/>
                <button>ADD</button>
            </CustomInput>
        </Container>
    )
}


export default Counter;


