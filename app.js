const express = require('express');
const app = express();

app.use(express.static('public'));

const products = [
  { name: "Red Dress", price: "₹999" },
  { name: "Blue Top", price: "₹499" },
  { name: "Kurti", price: "₹799" },
  { name: "Jeans", price: "₹1199" }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
