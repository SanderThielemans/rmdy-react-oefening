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

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px;
    padding: 10px;
`
