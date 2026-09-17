import Cabecalho from './components/Cabecalho';
import { PostList} from './components/PostList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TemaProvider} from './components/Tema'
import {Home} from './components/Home.jsx'
// rotas. react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // link não vai precisar mais ser importado, pois a navbar ja importa ele
import { Sobre } from './components/Sobre.jsx';
import NotFound from './components/NotFound';
import { NavBar } from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <TemaProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TemaProvider>
    </div>
  );
}

export default App;