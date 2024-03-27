import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Addons from './pages/Addons/Addons';
import Plan from './pages/Plan/Plan';
import Summary from './pages/Summary/Summary';
import Info from './pages/Info/Info';
import Thanks from './pages/Thanks/Thanks';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Info />}></Route>
          <Route path="plan" element={<Plan />}></Route>
          <Route path="addons" element={<Addons />}></Route>
          <Route path="summary" element={<Summary />}></Route>
          <Route path="thanks" element={<Thanks />}></Route>
          <Route path="*" element={<>Нет такого</>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
