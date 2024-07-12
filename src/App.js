
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Catalog from './pages/Catalog/Catalog';
import Main from './pages/Main/Main';
import OutletCatalog from './pages/Catalog/OutletCatalog';
import About from './pages/About/About';
import Layout from './layout/Layout';

function App() {


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalog" element={<Catalog />} />
        <Route index element={<OutletCatalog />} />
        <Route path="about" element={<About />} />

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
