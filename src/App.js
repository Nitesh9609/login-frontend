import {Routes,Route} from 'react-router-dom'
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import './app.css'


function App() {
  return (
    <>
        <Routes>
          {/* <Route path='/' element={<HomePage/>}/> */}
          <Route path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </>
  );
}

export default App;
