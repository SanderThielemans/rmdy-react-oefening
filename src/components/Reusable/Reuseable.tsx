import React from 'react'
import { Container } from './Reuseable.styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const LabelButton: React.FC<Props> = (props) => {

    const { label, ...rest } = props;

    return(
        <>
            <p>{label.toLocaleUpperCase()}</p>
            <button {...rest}>OVER HERE</button>
        </>
    )
}

const Reuseable: React.FC = () => {
    return(
        <Container>
            <LabelButton label='Click the button below' onClick={e => console.log('clicked button')} />
        </Container>
    )
}



export default Reuseable