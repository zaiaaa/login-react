import React from 'react'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import{
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles'
import Logo from "../../assets/dio_logo.png"
import { IHeader } from './types'


const Header = ({autenticado}: IHeader) => {
  
    const navigate = useNavigate();

    const handleSignIn = () =>{
        navigate('/signin')
    }

    const handleHome = () => {
        navigate('/')
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt='Logo' width={'80px'} />
                {autenticado ? (
                    <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>

            <Row>
            {autenticado ? (
                    <>
                    <UserPicture src=''/>
                </>) : (<>
                    <MenuRight onClick={handleHome}>Home</MenuRight>
                    <Button onClick={handleLogin} title={"Entrar"}/>
                    <Button onClick={handleSignIn} title={"Cadastrar"}/>
                </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}


export { Header }