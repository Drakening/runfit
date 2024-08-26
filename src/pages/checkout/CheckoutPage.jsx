// CheckoutPage.js
import React, { useState } from 'react';
import ShippingInfo from './ShippingInfo';
import PaymentInfo from './PaymentInfo';
import OrderReview from './OrderReview';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="checkout-page">
      {step === 1 && <ShippingInfo onNext={nextStep} setShippingInfo={setShippingInfo} />}
      {step === 2 && <PaymentInfo onNext={nextStep} onPrev={prevStep} setPaymentInfo={setPaymentInfo} />}
      {step === 3 && <OrderReview onPrev={prevStep} shippingInfo={shippingInfo} paymentInfo={paymentInfo} />}
    </div>
  );
};

export default CheckoutPage;

// ShippingInfo.js, PaymentInfo.js, and OrderReview.js would be separate components