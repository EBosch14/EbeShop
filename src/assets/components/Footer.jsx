import { useCart } from "../hooks/useCart";

export default function Footer() {
  const { cart } = useCart();
  return (
    <footer className="text-yellow-50 fixed left-4 bottom-4 px-6 py-2 bg-opacity-70 bg-black rounded-3xl opacity-95 backdrop-blur">
      <h4 className="m-0 flex items-center flex-col">
        Shopping Cart Proyect
        <span className="text-sm opacity-80">Linkedin: Enzo Bosch</span>
      </h4>
      {/*
    JSON.stringify(cart, null, 2)
*/}
    </footer>
  );
}
