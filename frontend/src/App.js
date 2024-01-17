import { Login, Notfound, Signup, Englishmcq, Admin, BiologyMcq ,PhysicsMcq,MathMcq, ChemistryMcq } from './routes/pages';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/english" element={<Englishmcq />}></Route>
        <Route path='biology' element={<BiologyMcq />}></Route>
        <Route path='physics' element={<PhysicsMcq />}></Route>
        <Route path='chemistry' element={<ChemistryMcq />}></Route>
        <Route path='math' element={<MathMcq />}></Route>
        <Route path="/admindashboard" element={<Admin />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;