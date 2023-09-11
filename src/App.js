import "./App.css";
import { Route, Routes } from "react-router-dom";

// components
import Header from "./template/Header/Header";
import Navbar from "./template/Navbar/Navbar";
import Store from "./components/store/Store";
import Details from "./components/store/Details";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import ShopCart from "./template/shop/ShopCart";
import Footer from "./template/Footer/Footer";
import Signup from "./template/signup/Signup";
import SignIn from "./template/signIn/SignIn";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
