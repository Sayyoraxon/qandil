
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Catalog from './pages/Catalog/Catalog';
import Main from './pages/Main/Main';
import OutletCatalog from './pages/Catalog/OutletCatalog';
import About from './pages/About/About';
import Layout from './layout/Layout';
import { useState } from 'react';

function App() {

  const [img, setImg] = useState()


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Main setImg={setImg}/>} />
        <Route path="catalog" element={<Catalog setImg={setImg}/>} />
        <Route path="about" element={<About setImg={setImg} img={img}/>} />

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
