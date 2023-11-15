import React from 'react'
import { Button } from '../button'
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

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt='Logo' width={'5%'} />
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
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title={"Entrar"}/>
                    <Button title={"Cadastrar"}/>
                </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}


export { Header }