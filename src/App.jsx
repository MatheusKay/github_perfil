import Perfil from "./components/Perfil"
import Repos from "./components/ReposList"
import { useState } from "react"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className="container_input">
        <input className="nome_usuario" type="text" placeholder="Usuario gitHub" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>
      {nomeUsuario.length > 0 && (
        <>
          <Perfil nomeUsuario = {nomeUsuario} />
          <Repos nomeUsuario = {nomeUsuario}/>
        </>
      )}
    </>

  )
}

export default App
