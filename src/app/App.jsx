import {Routes, Route} from 'react-router-dom';
import HeaderMain from '../HeaderMain';
import NotFoundPage from '../pages/NotFoundPage';
import Board from '../Board';


export default  function App() {
    return (
      <>
      <HeaderMain/>
        <Routes>
          <Route path='/*' element={<NotFoundPage/>}/>
          <Route path='/boards' element={<Board/>}/>
        </Routes>
      </>
    );
  }
  
  