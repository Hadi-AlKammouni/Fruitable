// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup.";
import Sidebar from './components/Sidebar/Sidebar';
import './index.css';

const App = () => {
  return (
    <div className="App">
      {/* Hello World! */}
      <div className='AppGlass'>
        <Sidebar/>
      </div>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="login" element={<Login/>}></Route>
    //     <Route path="signup" element={<Signup/>}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
