import React from 'react'
import styled from 'styled-components'

const GlobalContainer: React.FC<{children: React.ReactNode}> = ({children}) => {

    return(
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    max-width: 1000px;
    min-height: calc(100vh - 60px);
    height: auto;
    margin: 25px auto;
`
export default GlobalContainer