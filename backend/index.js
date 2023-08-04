const userRoutes = require("./routes/userRoutes");
const produitsRoutes = require("./routes/produitsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
const stripe = require("stripe")(process.env.STRIPE);

app.post("/check", async (req, res) => {
  try {
    console.log(req.body.cart.products);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: await req.body.cart.products.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.SERVER}success`,
      cancel_url: `${process.env.SERVER}cancel`,
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
app.use("/api/orders", ordersRoutes);

//connect to mogoose
mongoose.connect(process.env.URL).then(() => {
  console.log("`🟢 Connected To DataBase`");
  // listen for request
  app.listen(3002, () => {
    console.log("`🟢 server started on port 3002`");
  });
});
