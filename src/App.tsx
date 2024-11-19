import { BrowserRouter as Router, Route , Routes } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/cadastro" element={<>CADASTRO</>} />
        <Route path="/home" element={<>HOME</>} />
        <Route path="/leads" element={<>LEADS</>} />
        <Route path="/perfil" element={<>PERFIL</>} />
      </Routes>
    </Router>
  )
}

export default App
