const express = require('express');
const app = express();

app.use(express.static('public'));

const products = [
  { name: "Red Dress", price: "₹999" },
  { name: "Blue Top", price: "₹499" },
  { name: "Kurti", price: "₹799" },
  { name: "Jeans", price: "₹1199" }
];

// ✅ ROOT ROUTE (IMPORTANT FIX)
app.get('/', (req, res) => {
  res.send("Women Clothing App is running 🚀");
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
