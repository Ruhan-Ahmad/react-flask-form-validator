import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from './MyComponent/Header';
import { Home } from './MyComponent/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import { Footer } from './MyComponent/Footer';
import { Login } from './MyComponent/Login';
import { Signup } from './MyComponent/Signup';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
