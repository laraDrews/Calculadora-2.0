import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import Frase from './components/Frase'
import Calculadora from './components/Calculadora'

function Saudacao(){
  return <h1>Roblox</h1>
}
function App() {

  return (
    <>
     <Saudacao/>
     <Mensagem texto="robloxxxxxxxxxxxxxx"/>
     <Frase/>
     <Calculadora/>
    </>
  )
}

export default App
