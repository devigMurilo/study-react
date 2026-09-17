import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const NotFound = () => {
  return (
    <Card className="text-center my-4">
      <Card.Body>
        <Card.Title>404</Card.Title>
        <Card.Text>Página não encontrada</Card.Text>
        <Link to="/">Voltar para a página inicial</Link>
      </Card.Body>
    </Card>
  )
}

export default NotFound