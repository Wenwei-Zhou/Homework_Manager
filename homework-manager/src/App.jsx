import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import {routes} from './Routes/Routes.js'
// import Home from './Home/Home.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Component = route.component;
           return <Route key={route.path} path={route.path} element={<Component />} />
        })}
      </Routes>
    </BrowserRouter>
    // <Home />
    
  )
}

export default App
