import { useState } from 'react'
import { Button } from 'react-bootstrap'


export default function Botao() {
  const [clique, setClique] = useState(0)

  function contadadorClique() {
    setClique(clique + 1)
    console.log(`Botão clicado ${clique + 1} vezes`)
  }
  return (
    <div className="d-grid col-6 mx-auto my-4">
      <Button type="button" className="btn-primary" onClick={contadadorClique}>Clique aqui {clique}</Button>
    </div>
  );
}
// duvida, posso pegar esse botao que ja existe, importar e criar um novo estado para ele, ou seja, posso ter dois estados diferentes para o mesmo botao? 