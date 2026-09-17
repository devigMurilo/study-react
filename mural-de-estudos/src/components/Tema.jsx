import { createContext, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'

const TemaContext = createContext()

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro')
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  )
}

export function useTema() {
  return useContext(TemaContext)
}

function Pai() {
  return <Filho />
}
 // nao sabia que dava pra fazer isso com classname
export function Filho() {
  const { tema, setTema } = useTema()
  return (
    <div className="d-grid col-6 mx-auto my-4 ">
        <div className={ tema === 'claro' ? 'bg-light text-dark' : 'bg-dark text-light'} > 
            <p>Tema atual: {tema}</p>
            <Button type="button" className="btn-primary" onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
                Alternar Tema da div
            </Button>
        </div>
    </div> // so tem um problema aqui, so muda o background do div, mas nao muda o background do body
  )
  //explicacao: o useContext é usado para compartilhar estado entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes. Ele permite que você acesse o valor do contexto em qualquer componente filho, facilitando a comunicação entre eles.   
}