import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Card } from "../../components/card"
import { UserInfo } from "../../components/userInfo"
// import {} from '../../assets/'

import {Container, Column, Title, TitleHighlight} from './styles'


const Feed = () => {

    return (<>
        <Header autenticado={true}/>
        <Container>
            <Title>Feed</Title>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={5} nome={"Pablo Henrique"} image={""}/>
                <UserInfo percentual={56} nome={"Pablo Henrique"} image={""}/>
                <UserInfo percentual={15} nome={"Pablo Henrique"} image={""}/>
                <UserInfo percentual={97} nome={"Pablo Henrique"} image={""}/>
                <UserInfo percentual={12} nome={"Pablo Henrique"} image={""}/>
            </Column>
        </Container>
    </>)
}

export { Feed }