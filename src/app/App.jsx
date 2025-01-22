import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainWindow from '../pages/MainWindow';


export default  function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainWindow/>} />
          </Routes>
        </BrowserRouter> 
      </>
    );
  }
  
  