import Card from 'react-bootstrap/Card';
import Botao from './Button';
import { PostsTotal } from './PostsTotal.jsx';



export function Home() {
  return (
    <>
      <Card className="text-center my-4">
        <h1>Bem-vindo ao Mural de Estudos</h1>
        <p>Este é o início do seu jornada de aprendizado em React.</p>
      </Card>
      <Botao />
      <PostsTotal />
    </>
  );
}

