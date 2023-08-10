import { useEffect, useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest, userRequest } from "../../requestMethods";
import axios from "axios";

export default function NewProduct() {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const [product,setProduct]=useState([])
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("api/products/"+productId);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, []);

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const [title,setTitle]=useState(product.title)
  const [image,setImage]=useState(product.image)
  const [quantity,setQuantity]=useState(product.quantity)
  const [series,setSeries]=useState(product.series)
  const [price,setPrice]=useState(product.price)
  const [category,setCategory  ]=useState(product.category)
  const [description,setDesc]=useState(product.description)

  
  const handleCreate = async () => {

    const CreatedProductData = {
      title,
      image:"https://i.ibb.co/vL7hwq4/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg",
      quantity,
      series,
      price,
      category,
      description,
      otherView:[],
      
    };
    await axios.post('http://localhost:3002/api/products',CreatedProductData);
    
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            name="Stock"
            type="number"
            placeholder="100"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Series</label>
          <input
            name="Series"
            type="text"
            placeholder="100"
            onChange={(e) => setSeries(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Clothing,Figues" onChange={(e) => setCategory(e.target.value)} />
        </div>
        
        <input type="button" onClick={handleCreate} className="addProductButton" value="Create"/>
          
        
      </form>
    </div>
  );
}
