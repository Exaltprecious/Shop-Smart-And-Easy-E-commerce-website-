let carts = {}; // Example: { userId: [{ productId, quantity }] }

app.post('/cart', (req, res) => {
  const { userId, productId, quantity } = req.body;
  carts[userId] = carts[userId] || [];
  carts[userId].push({ productId, quantity });
  res.json({ message: 'Product added to cart' });
});

app.get('/cart/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json(carts[userId] || []);
});
