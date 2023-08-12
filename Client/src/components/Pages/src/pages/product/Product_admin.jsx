import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const [pStats, setPStats] = useState([]);
  const [product,setProduct]=useState([])
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("api/products/"+productId);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [product]);
  
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  {/*useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]); */}
  const [title,setTitle]=useState(product.title)
  const [image,setImage]=useState(product.image)
  const [quantity,setQuantity]=useState(product.quantity)
  const [series,setSeries]=useState(product.series)
  const [price,setPrice]=useState(product.price)
  const [category,setCategory  ]=useState(product.category)
  const [desc,setDesc]=useState(product.description)

  const handleUserUpdate = async()=>{
    
    try {
      const updatedProductData = {
        title,
        image,
        quantity,
        series,
        price,
        category,
        desc,
        otherView:[],
        
      };
      console.log(productId)
      const res = await axios.patch("http://localhost:3002/api/products/"+productId, updatedProductData);
      console.log(res)
    } catch (err){
      console.log(err)
    }
  
}
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/admin/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.image} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.quantity}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Title</label>
            <input type="text" placeholder={product.title} onChange={(e) => setTitle(e.target.value)} />
            <label>Product Description</label>
            <input type="text" placeholder="Description"  onChange={(e) => setDesc(e.target.value)}/>
            <label>Price</label>
            <input type="text" placeholder={product.price} onChange={(e) => setPrice(e.target.value)} />
            <label>Stock</label>
            <input type="text" placeholder={product.quantity} onChange={(e) => setQuantity(e.target.value)} />
            <label>Series</label>
            <input type="text" placeholder={product.series} onChange={(e) => setSeries(e.target.value)} />
            <label>Category</label>
            <input type="text" placeholder={product.category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <input type="button" className="productButton" onClick={handleUserUpdate} value="Update"/>
          </div>
        </form>
      </div>
    </div>
  );
}
