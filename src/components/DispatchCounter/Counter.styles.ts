import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    width: 30%;
    min-width: 300px;
    margin: 0px auto;
`

export const Controls = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
`

export const Reset = styled.button`
    width: 100%;
    display: block;
    margin: 10px auto;
`

export const CustomInput = styled.div`
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-gap: 5px;
`