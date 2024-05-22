import './App.css';
import { createContext, useEffect, useState } from 'react';
import UserComponent from './components/UserComponent/UserComponent';
import CommentComponent from './components/CommentComponent/CommentComponent';

export const AppContext = createContext(null)
const App = () => {

  return (
    <div className='wrapper'>
      <div className='header'>Зареєструйтеся</div>
       <UserComponent />
      <div className='header'>Залиште Ваш коментар</div>
       <CommentComponent />
    </div>
    
  )
}

export default App;