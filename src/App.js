
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Main from './components/Main/Main';
import Home from './components/Home';
import { useState } from 'react';
import OutletCatalog from './components/Catalog/OutletCatalog';
import About from './components/About/About';

function App() {

  const [main, setMain] = useState(true)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home/>}>
        <Route index element={<Main/>}/>
        <Route path="catalog" element={<Catalog/>}>
          <Route index element={<OutletCatalog/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
