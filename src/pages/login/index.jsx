//import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import {useNavigate} from 'react-router-dom'
import { Input } from "../../components/Input"

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'


const Login = () => {

    const navigate = useNavigate();

    const HandleClickSignIn = () =>{
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecmologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form action="#">
                        <Input placeholder="E-mail"/>
                        <Input placeholder="Senha" type="password"/>
                        <Button title={"Entrar"} variant="secondary" onClick={HandleClickSignIn} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }