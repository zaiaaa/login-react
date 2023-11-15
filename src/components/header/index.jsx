import React from 'react'
import { Button } from '../button'
import{
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input
} from './styles'
import Logo from "../../assets/dio_logo.png"

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt='Logo' width={'10%'} />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>

            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title={"Entrar"}/>
                <Button title={"Cadastrar"}/>
            </Row>
        </Container>
    </Wrapper>
  )
}


export { Header }