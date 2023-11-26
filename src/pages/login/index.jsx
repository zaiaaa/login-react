//import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import {useNavigate} from 'react-router-dom'
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from "../../services/api"

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'


const schema = yup
  .object({
    email: yup.string().email('email não é válido').required('campo obrigatório'),
    password: yup.string().min(6, 'No minimo 6 caracteres').required('campo obrigatório'),
  })
  .required()


  

const Login = () => {

    const navigate = useNavigate();

    // const HandleClickSignIn = () =>{
    //     navigate('/feed')
    // }


    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({resolver: yupResolver(schema),
        mode: 'onChange',
    })

    console.log(isValid, errors)
    
      const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            console.log(data)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválidos')
            }
        } catch (error) {
            alert("houve um erro -> ", error)
        }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name={"email"} errorMessage={errors?.email?.message} control={control} placeholder="E-mail"/>
                        <Input name={"password"} errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password"/>
                        <Button title={"Entrar"} variant="secondary" type="submit"/>
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