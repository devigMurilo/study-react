import Cabecalho from './components/Cabecalho';
import { PostList } from './components/PostList'
import Botao from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Cabecalho /> 
      <h1>Dados da API</h1>
      <PostList />
      <Botao/>
    </div>
  );
}

export default App;