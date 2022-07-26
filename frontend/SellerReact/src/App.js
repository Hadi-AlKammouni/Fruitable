import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Sidebar from './components/Sidebar/Sidebar'
import './index.css';
import Stock from "./pages/Stock/Stock";
import AddItem from "./pages/AddItem/AddItem";
import Home from './pages/Home/Home';
import EditItem from "./pages/EditItem/EditItem";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import GroceryProvider from "./context/grocery";

const App = () => {

  return (
    <>
    <GroceryProvider>
    <BrowserRouter>
      <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="stock" element={<Stock/>}></Route>
            <Route path="add_item" element={<AddItem/>}></Route>
            <Route path="edit_item" element={<EditItem/>}></Route>
            <Route path="manage_orders" element={<ManageOrders/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    </GroceryProvider>
    </>
  );
}

export default App;