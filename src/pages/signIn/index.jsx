import React from 'react'
import { Header } from '../../components/header'
import { Container, JaTemConta, ContaCriada ,LeftSide, RightSide, TitleForm, SubTitleForm, Wrapper, Footer } from './styles'
import { Button } from '../../components/button'
import {Link, useNavigate} from 'react-router-dom'
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from "../../services/api"


const schema = yup
  .object({
    nomeCompleto: yup.string().required('Campo obrigatótrio'),
    email: yup.string().email('Isto não é um e-mail').required('Campo obrigatótrio'),
    senha: yup.string().min(6, "Mínimo 6 caracteres de senha").required('Campo obrigatótrio')
    })
  .required()



const Cadastro = () => {

    const navigate = useNavigate()
    // const handleSubmit = () => {
    //     console.log('oi')
    // }

    const { control, handleSubmit, formState: {errors, isValid}, } =
    useForm({resolver: yupResolver(schema), mode: "onChange"})
    
    console.log(errors, isValid)

    const onSubmit = async (Formdata) => {
        const isPosted = await api.post('users', {
            name: Formdata.nomeCompleto,
            email: Formdata.email,
            senha: Formdata.senha
        })

        if(isPosted){
            navigate('/')
        }
    }

  return (
    <>
        <Header />
        <Container>
            <LeftSide>
                <h1>
                    A plataforma para você apreder com experts, dominar as
                    principais tecnologias e entrar mais rápido nas empresas
                    mais desejadas.
                </h1>
            </LeftSide>
            <RightSide>
                <TitleForm>
                    Comece agora grátis
                </TitleForm>
                <SubTitleForm>
                    Crie sua conta e make the change_
                </SubTitleForm>
                <Wrapper>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input errorMessage={errors?.nomeCompleto?.message} name={"nomeCompleto"} control={control} placeholder="Nome completo"/>
                        <Input errorMessage={errors?.email?.message} name={"email"} control={control} placeholder="Email"/>
                        <Input errorMessage={errors?.senha?.message} name={"senha"} control={control} placeholder="Senha"/>
                        <Button title={"Criar minha conta"} variant='secondary' type="submit" />
                    </form>
                </Wrapper>
                <Footer>
                    Ao clicar em "Criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os termos de Uso da Dio
                </Footer>
                <JaTemConta>
                    Já tenho conta <Link to="/login">Fazer Login</Link>
                </JaTemConta>
                {/* {isPosted ? <ContaCriada>Conta criada com sucesso</ContaCriada> : null} */}
            </RightSide>
        </Container>
    </>
  )
}

export {Cadastro}