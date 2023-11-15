import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
// import {} from '../../assets/'

import {Container, TextContent, Title, TitleHighLight} from './styles'


const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente <br />
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts
                </TextContent>
                <Button title={"Começar agora"} variant="secondary" onClick={''}/>
            </div>

            <div>
                <img src={''} alt="" srcset="" />
            </div>
        </Container>
    </>)
}

export { Home }