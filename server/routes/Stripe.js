import express from 'express';
const StripeRoute = express.Router()
import stripe from 'stripe';

const stripeSecretKey = '';
const stripeInstance = stripe(stripeSecretKey);

StripeRoute.post('/process-payment', async (req, res) => {
  const { amount, id ,userId} = req.body;
  try {
    const payment = await stripeInstance.paymentIntents.create({
      amount,
      currency: 'USD',
      payment_method: id,
      confirm: true,
      metadata: {
        userId, 
      },
    });
    console.log(payment)

    if (payment.status === 'succeeded') {
        console.log("Payment success")
      res.json({ success: true });
    }else{
        console.log("Payment unsuccess")
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default StripeRoute
