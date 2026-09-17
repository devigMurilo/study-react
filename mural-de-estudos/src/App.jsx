import Cabecalho from './components/Cabecalho';
import { PostList } from './components/PostList'
import Botao from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useTema, TemaProvider} from './components/Tema'
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <TemaProvider>
        <Cabecalho />
        <Filho />
        <h1>Dados da API</h1>
        <PostList />
        <Botao/>
        
      </TemaProvider>
    </div>
  );
}

function Pai() {
  return <Filho />
}
 // nao sabia que dava pra fazer isso com classname
function Filho() {
  const { tema, setTema } = useTema()
  return (
    <div className={tema === 'claro' ? 'bg-light text-dark' : 'bg-dark text-light'}> 
      <p>Tema atual: {tema}</p>
      <Button type="button" className="btn-primary" onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
        Alternar Tema
      </Button>
    </div>
  )
}

export default App;