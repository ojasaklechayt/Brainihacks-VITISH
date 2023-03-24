import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Model from './components/Model/Model'
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-screen bg-slate-100">

        <div>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/model" element={<Model />} />
            </Routes>
          </BrowserRouter>


        </div>


      </div>
    </>
  )
}

export default App
