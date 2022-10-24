import { IRoute } from 'common/router/routes'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ExcerciseCard: React.FC<IRoute> = ({title, url, keyWords, visible}) => {

    const navigate = useNavigate()

    const handleNav = () => {
        navigate(url)
    }

    return visible ? (
        <StyledCard onClick={handleNav}>
            <Title>{title.toLocaleUpperCase()}</Title>
            <p>{keyWords?.map((el, i) => <sub key={el}>{el}{i === keyWords.length - 1 ? null : ', '}</sub>)}</p>
        </StyledCard>
    ) : null
}

const StyledCard = styled.div`
    height: 60px;
    display: grid;
    align-items: center;
    cursor: pointer;
    opacity: 0.6;
    text-align: center;
    margin-bottom: 15px;
    :hover {
        opacity: 1;
    }
`

const Title = styled.p`
    font-size: 12px;
    margin: 0;
    font-weight: bold;
    text-decoration: none;
    :hover {
        color: black;
    }
`

export default ExcerciseCard