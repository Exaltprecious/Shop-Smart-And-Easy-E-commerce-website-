const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

app.post('/payment', async (req, res) => {
  const { amount, currency, paymentMethodId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
