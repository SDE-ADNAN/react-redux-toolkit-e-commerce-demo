import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import './index.css'
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route className="navLink" path="/" element={<Home/>} />
          <Route className="navLink" path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter >
     </Provider>
    </div>
  );
}

export default App;
