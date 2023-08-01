import { useState } from "react";
import "./create.css";
const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [catagorie, setCatagorie] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submit = async (e) => {
    e.preventDefault();

    const product = { title, image, price, description, quantity, catagorie };

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="create">
      <section className="container">
        <header>Add Product</header>
        <form className="form">
          <div className="input-box">
            <label>Title</label>
            <input
              type="text"
              placeholder=" Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Description</label>
            <input
              type="text"
              placeholder="Description "
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Category</label>
              <input
                type="text"
                onChange={(e) => setCatagorie(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-box address">
            <label>Image</label>
            <input type="text" onChange={(e) => setImage(e.target.value)} />
            <label>Qiantity</label>
            <input
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              defaultValue={1}
            />
            {/*  <input
              type="text"
              placeholder="Enter street address line 2"
              required
            />
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="column">
              <input type="text" placeholder="Enter your region" required />
              <input type="number" placeholder="Enter postal code" required />
            </div> */}
          </div>
          <button onClick={submit}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Create;
