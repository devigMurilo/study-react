import 'react-bootstrap';
import { PostsTotal } from './PostsTotal.jsx';
import { Card } from 'react-bootstrap';


export function Sobre() {
  return (
    <>
       <Card>
            <Card.Body>
                <Card.Title>Sobre o Mural de Estudos</Card.Title>
                <Card.Text>
                    O Mural de Estudos é uma aplicação desenvolvida para fins educacionais, com o objetivo de demonstrar conceitos e práticas de desenvolvimento web utilizando React. 
                    Aqui, você pode explorar diferentes funcionalidades, como a exibição de posts, navegação entre páginas e muito mais.
                </Card.Text>
            </Card.Body>  
        </Card> <PostsTotal />

    

    </>
    )
}