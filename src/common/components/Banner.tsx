import Logo from 'media/rmdy.svg'
import styled from 'styled-components'

const Banner: React.FC = () =>{
    return(
        <StyledBanner>
            <img style={{cursor: 'pointer'}} src={Logo} alt="rmdy_logo" onClick={() => window.location.replace('/')}/>
            <p onClick={() => window.location.replace('/')}>{'<'}</p>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    height: 60px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 30px;
    padding: 0px 15px;
    grid-gap: 35px;

    img{
        height: 25px;
        display: block;
    }

    p{
        font-weight: bold;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 40px;
        background-color: black;
        color: white;
        transition-duration: 0.2s;
        cursor: pointer;
        :hover{
            color: black;
            background-color: white;;
        }
    }
`

export default Banner