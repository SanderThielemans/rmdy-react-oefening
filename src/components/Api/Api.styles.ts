import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    width: 50%;
    min-width: 300px;
    margin: 0px auto;
`

export const DataList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`

export interface UserContainerProps {
    gender?: string;
}

export const UserContainer = styled.div<UserContainerProps>`
    display: flex;
    flex-direction: column;
    border: solid 2px;
    padding: 10px;
    border-color: ${props => props.gender === 'male' ? 'blue' : 'red'};

    img {
        align-self: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
    }

    h2 {
        font-size: 1.2rem;
    }

    .gender {
        color: #7D7D7D;
        text-transform: uppercase;
        font-size: 0.9rem;
    }


`
