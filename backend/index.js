const userRoutes = require("./routes/userRoutes");
const produitsRoutes = require("./routes/produitsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: ["https://animeverse-front.vercel.app"], // Removed the trailing slash here
  methods: ["POST", "GET","DELETE","PATCH","PUT"],
  credentials: true,
}));


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://animeverse-front.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
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

// Routes
app.use("/user", userRoutes);
app.use("/api/products", produitsRoutes);
app.use("/api/orders", ordersRoutes);

// Connect to MongoDB
mongoose.connect(process.env.URL).then(() => {
  console.log("🟢 Connected To DataBase");
  // Listen for requests
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`🟢 Server started on port ${PORT}`);
  });
});
