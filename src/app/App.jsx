import {Routes, Route} from 'react-router-dom';
import HeaderMain from '../components/header/HeaderMain';
import NotFoundPage from '../pages/NotFoundPage';
import Board from '../pages/Board/Board';
import MyBoard from '../pages/List/MyBoard';
import Auth from '../pages/Auth/Auth';



export default  function App() {
    return (
      <>
      <HeaderMain/>
        <Routes>
          <Route path='/*' element={<Auth />}/>
          <Route path='/boards' element={<Board/>}/>
          <Route path="/board/:boardName" element={<MyBoard />} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </>
    );
  }
  
  