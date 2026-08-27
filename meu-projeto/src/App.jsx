import { Descricao } from './components/Descricao.jsx'
import {Section} from './components/section.jsx'
import useEffect from 'react'

useEffect(() => {
  console.log('App.jsx foi montado')
}, [])


export default function App() {
  return (
    <>
        <Section />
        <Descricao />
        <useEffect />
    </>
  )
}
// 