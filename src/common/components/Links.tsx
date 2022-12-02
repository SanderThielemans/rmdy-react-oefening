import React from 'react'
import styled from 'styled-components'
import {Routes as AppRoutes, IRoute} from '../router/routes'
import ExcerciseCard from './ExcerciseCard'

const Links: React.FC = () => {
   return( 
        <GridContainer>
            {AppRoutes.sort((a,b) => a.dificulty - b.dificulty).map((route: IRoute) => (<ExcerciseCard key={route.title} {...route} />))}
        </GridContainer>
    )
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
`

export default Links