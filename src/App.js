import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Login from './Login';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ForgetPassword from './ForgetPassword';
import Test from './Test';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="">
     {/* <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignIn/>}>
       <Route index element={<Login/>}/>
       <Route path='/createaccount' element={<CreateAccount/>}/>
      </Route>
      <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
     </Routes>
     </BrowserRouter> */}
     <Dashboard/>
    </div>
  );
}

export default App;
