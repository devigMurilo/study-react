import {Lista} from './components/Lista.jsx'
import array from './components/Lista.jsx'
import { Descricao } from './componets/Descricao.jsx'
import {Section} from './componets/section.jsx'



export default function App() {
  return (
    <>
        <Section />
        <Descricao />
        <Lista array={array} />
    </>
  )
}
