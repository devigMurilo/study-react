import React from 'react';
import Cabecalho from './components/Cabecalho';
import CardAssunto from './components/cardAssunto';

const array = [
  { id: 1, name: 'Item 1', concluido: true},
  { id: 2, name: 'Item 2', concluido: false},
  { id: 3, name: 'Item 3', concluido: true},
  { id: 4, name: 'Item 4', concluido: false},
  { id: 5, name: 'Item 5', concluido: true},
  { id: 6, name: 'Item 6', concluido: false},
];




export default function App() {
  return (
    <div className="App">
      <Cabecalho title="Meu App" subtitle="Bem-vindo!" />
      {array.map((item) => (
        <CardAssunto key={item.id} name={item.name} concluido={item.concluido} />
      ))}
    </div>
  );
}