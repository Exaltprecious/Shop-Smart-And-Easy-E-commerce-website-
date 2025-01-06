let products = [{ id: 1, name: 'Product 1', stock: 10 }];

app.post('/update-stock', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (product) {
    product.stock -= quantity;
    if (product.stock < 5) {
      // Notify admin
      console.log('Low stock alert for:', product.name);
    }
    res.json({ message: 'Stock updated', product });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});
