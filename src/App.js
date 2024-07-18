
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Catalog from './pages/Catalog/Catalog';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Layout from './layout/Layout';
import { useState } from 'react';
import Contact from './pages/Contacs/Contact';

function App() {

  const [img, setImg] = useState()
  const [display, setDisplay] = useState("none")


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout display={display} setDisplay={setDisplay}/>}>
        <Route index element={<Main setImg={setImg} display={display} setDisplay={setDisplay}/>} />
        <Route path="catalog" element={<Catalog setImg={setImg}/>} />
        <Route path="about" element={<About setImg={setImg} img={img}/>} />
        <Route path="contacts" element={<Contact/>}/>

      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
