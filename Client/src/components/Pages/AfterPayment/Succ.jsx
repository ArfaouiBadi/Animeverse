import "./after.css";
import { useDispatch,useSelector } from "react-redux";

import { resetCart } from "../../Redux/cartReducer";
import axios from "axios";
const Succ = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(user)
  let email = user.currentUser.email;
  let address = user.currentUser.address;
  let idUser = user.currentUser._id;
  let products = cart.products;
  let totalPrice = cart.total;
  const handleCreateOrder = async(res,req)=>{
    console.log("t3ada")
    try{
      const res= await axios.post("http://localhost:3002/api/orders",{ email,products, address, idUser, totalPrice })
      
    }catch(err){
      console.log(err)
    }
  }
  
 
  setTimeout(() => {
    
    handleCreateOrder()
    window.location = "http://localhost:5173/products/All_Products";
    
  }, 5000);

  return (
    
      <div className="Container">
        <div className="card">
      <div style={{borderRadius:"200px", height:"200px", width:"200px" ,background: "#F8FAF5" ,margin:"0 auto"}}>
        <i className="checkmark">✓</i>
      </div>
        <h1 className="succ">Success</h1> 
        <p className="succp">We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
      </div>

  );
};

export default Succ;
