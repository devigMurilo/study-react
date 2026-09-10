import React from 'react';
import Cabecalho from './components/Cabecalho';
import { PostList } from './components/PostList';
import { link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Cabecalho /> 
      <h1>Dados da API</h1>
      <PostList />
    </div>
  );
}

export default App;