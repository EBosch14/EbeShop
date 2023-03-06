import ProductsList from "./assets/components/ProductsList";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Cart from "./assets/components/Cart";
import { CartProvider } from "./assets/context/CartContextReducer";

export default function App() {

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <ProductsList/>
      <Footer></Footer>
    </CartProvider>
  );
}
