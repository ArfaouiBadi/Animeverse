import "./after.css";
import { useDispatch, useSelector } from "react-redux";

import { resetCart } from "../../Redux/cartReducer";

const Succ = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  console.log("user");
  console.log(user);
  console.log("user");
  const submit = async (e) => {
    e.preventDefault();
    let address = user.address;
    let idUser = user.id;
    let products = cart.products;
    let totalPrice = cart.total;
    const command = { products, address, idUser, totalPrice };

    const response = await fetch("/produits", {
      method: "POST",
      body: JSON.stringify(command),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  setTimeout(() => {
    window.location = "http://localhost:5173/products/All_Products";
  }, 5000);

  return (
    <div className="suc">
      <h1 id="h1">thank you for your purchase</h1>
    </div>
  );
};

export default Succ;
