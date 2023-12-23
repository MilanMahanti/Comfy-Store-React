require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { shippingFee, totalPrice } = JSON.parse(event.body);
    const calculateOrderAmount = () => shippingFee + totalPrice;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });
      console.log(paymentIntent.client_secret);
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        message: error,
      };
    }
  }
  return {
    statusCode: 200,
    body: "Success",
  };
};
