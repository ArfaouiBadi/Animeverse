const userRoutes = require("./routes/userRoutes");
const produitsRoutes = require("./routes/produitsRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const produit = require("./models/produit");

const express = require("express");
const cors = require("cors");
const bcrypt=require("bcrypt")
const app = express();
app.use(cors())
/* app.use(
  cors({
    origin: "http://localhost:4000",
  })
); */
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
const stripe = require("stripe")(process.env.STRIPE);

const storeItem = new Map([[1, { price: 10000, name: "product" }]]);
app.post("/check", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: await req.body.items.map((item) => {
        const store = storeItem.get(item.id);
        console.log(store);
        console.log("eeeeeee");
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: store.name,
            },
            unit_amount: store.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.SERVER}/success.html`,
      cancel_url: `${process.env.SERVER}/cancel.html`,
    });
    console.log(session.url);
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
//routes
app.use("/user", userRoutes);
app.use("/api/products", produitsRoutes);
app.post("check", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: await req.body.items.map((item) => {
        const store = storeItem.get(item.id);
        console.log(store);
        console.log("eeeeeee");
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: store.name,
            },
            unit_amount: store.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.SERVER}/success.html`,
      cancel_url: `${process.env.SERVER}/cancel.html`,
    });
    console.log(session.url);
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
//connect to mogoose
mongoose.connect(process.env.URL).then(() => {
  console.log("`🟢 Connected To DataBase`");
  // listen for request
  app.listen(3002, () => {
    console.log("`🟢 server started on port 3002`");
  });
});
