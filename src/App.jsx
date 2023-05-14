// Import the App.css file for styling
import './App.css';

// Import necessary components and modules from React and React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Model from './components/Model/Model';
import Video1 from './components/Video1/video1';
import Video2 from './components/Video2/video2';
import Login from './components/Login/Login';

function App() {

  // Render the components for each route using the React Router <Route> component
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} /> {/* Render the Home component for the index route */}
            <Route path="/login" element={<Login />} /> {/* Render the Login component for the /login route */}
            <Route path="/model" element={<Model />} /> {/* Render the Model component for the /model route */}
            <Route path="/videoone" element={<Video1 />} /> {/* Render the Video1 component for the /videoone route */}
            <Route path="/videotwo" element={<Video2 />} /> {/* Render the Video2 component for the /videotwo route */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
