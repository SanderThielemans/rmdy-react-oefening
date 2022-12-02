import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {

    return(
        <StyledFooter>
            RMDY
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: grey;
    text-align: center;
    color: white;
    padding: 10px;
    font-weight: bold;
    font-size: 10px;
`

export default Footer;