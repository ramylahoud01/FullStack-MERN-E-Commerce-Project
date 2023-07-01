import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigation,useRouteLoaderData ,useNavigate} from 'react-router-dom';

const CARD_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };
  

function StripeForm(props) {
const navigation = useNavigation();
const submitting = navigation.state === 'submitting'
const navigate = useNavigate()
const totalAmout = props.totalPrice;
const token = useRouteLoaderData('root');
const amountInCents = Math.round(totalAmout * 100).toFixed(0);
const stripe = useStripe();
const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
         await fetch('http://localhost:8000/process-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount:amountInCents,
            id,
            userId:'555555'
          }),
        }).then(response =>{
            if( response.json()) {
                console.log('Paiement réussi !');
                fetch('http://localhost:8000/cart/deleteAll',{method:'Delete' , headers:{
                    'Authorization': `Bearer `+token,
                    'Content-Type': 'application/json',
                }})
                .then(()=>{
                return navigate('/cart/content')
                })
              }
              else {
                console.log('Échec du paiement !');
              }
        })
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' ,paddingBottom:'5px'}}>
          <label htmlFor="cardNumber">Numéro de carte</label>
          <CardNumberElement options={CARD_OPTIONS} id="cardNumber" />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: '1' }}>
              <label htmlFor="cardExpiry">MM/AA</label>
              <CardExpiryElement options={CARD_OPTIONS} id="cardExpiry" />
            </div>

            <div style={{ flex: '1' }}>
              <label htmlFor="cardCvc">CVC</label>
              <CardCvcElement options={CARD_OPTIONS} id="cardCvc" />
            </div>
          </div>

          <button
            style={{
              marginTop: '16px',
              backgroundColor: '#4caf50',
              color: '#ffffff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
            type='submit'
            disabled={submitting}
          >
            {submitting ? 'Submitting...' :'Pay'}
          </button>
        </form>
    </>
  );
}

export default StripeForm;
