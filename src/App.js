import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/Auth/login';
import Registrar from './paginas/Auth/register';
import { Home } from './paginas/Home';
import { useState } from 'react';

function App() {

  const [User, setUser] = useState([])

  return (
    <Fragment>
      <Router>
        <Routes>
          {
            !User.length > 0
            ?   <Route path='/' exact element = {<Login setUser={setUser} />}></Route>
            :
            <Route path='Home' exact element = {<Home User={User} setUser={setUser}/>}></Route>
          }
        
          <Route path='/register' exact element = {<Registrar/>}></Route>
         

          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
