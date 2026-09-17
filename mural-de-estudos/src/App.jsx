import Cabecalho from './components/Cabecalho';
import { PostList} from './components/PostList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TemaProvider} from './components/Tema'
import {Home} from './components/Home.jsx'
// rotas. react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <TemaProvider>
        <BrowserRouter>
          <Cabecalho title="Mural de Estudos" subtitle="Praticando React" />
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-link active d-flex justify-content-center gap-3 my-4">
          <Link to="/">Início</Link> | <Link to="/posts">Posts</Link>
        </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TemaProvider>
    </div>
  );
}

export default App;