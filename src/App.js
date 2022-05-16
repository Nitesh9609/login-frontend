import {Routes,Route} from 'react-router-dom'
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import './app.css'
import UserDetail from './userDetail/UserDetail';
import DisplayUser from './displayUser/DisplayUser';


function App() {
  return (
    <>
        <Routes>
          {/* <Route path='/' element={<HomePage/>}/> */}
          <Route path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/display' element={<DisplayUser/>}/>
        </Routes>
    </>
  );
}

export default App;
