
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog';
import Main from './components/Main';
import Home from './components/Home';
import { useState } from 'react';
import OutletCatalog from './components/OutletCatalog';

function App() {

  const [main, setMain] = useState(true)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home/>}>
        <Route index element={<Main/>}/>
        <Route path="catalog" element={<Catalog/>}>
          <Route index element={<OutletCatalog/>}/>
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
