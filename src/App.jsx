import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Model from './components/Model/Model'
function App() {
  return (
    <>
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/model" element={<Model />} />
            </Routes>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
