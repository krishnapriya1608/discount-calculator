import React, { useState } from 'react';

function Loadpage() {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [taxRate, setTaxRate] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  const calculateDiscount = () => {
    const discountPerItem = (originalPrice * discountPercentage) / 100;
    const discountAmountTotal = discountPerItem * quantity;
    const priceAfterDiscount = (originalPrice * quantity) - discountAmountTotal;
    const taxAmountTotal = (priceAfterDiscount * taxRate) / 100;
    const finalPriceTotal = priceAfterDiscount + taxAmountTotal;

    setDiscountAmount(discountAmountTotal);
    setTaxAmount(taxAmountTotal);
    setFinalPrice(finalPriceTotal);
  };

  const resetFields = () => {
    setOriginalPrice(100);
    setDiscountPercentage(10);
    setQuantity(1);
    setTaxRate(0);
    setDiscountAmount(0);
    setTaxAmount(0);
    setFinalPrice(0);
  };

  return (
    <div 
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/e2/c5/f9/e2c5f97f478ccdb4b2fa8649b8ccc859.gif")',
        backgroundSize: 'cover',
        height:"100vh"
       
       
        
      }}
    >
      <div className="discount-calculator-container" style={{ padding: '20px' }}>
        {/* Discount Details Card */}
        <div className="card discount-display" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1>{discountAmount.toFixed(2)}</h1>
          <p>Total Discount Amount (Money Saved)</p>
          <h2>{taxAmount.toFixed(2)}</h2>
          <p>Total Tax Amount</p>
          <h2>{finalPrice.toFixed(2)}</h2>
          <p>Final Price for {quantity} item(s)</p>
          <button onClick={resetFields} style={{ marginLeft: '10px' }}>Reset</button>
        </div>

        {/* Calculator Input Section */}
        <div className="calculator-input">
          <h3>Discount Calculator</h3>
          <p>Calculate the final price after discount for multiple items</p>

          <label>Original Price (per item)</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
          />

          <label>Discount Percentage</label>
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))}
          />

          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />

          <label>Tax Rate (%)</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(parseFloat(e.target.value))}
          />

          <button onClick={calculateDiscount}>Calculate Discount</button>
        </div>
      </div>
    </div>
  );
}

export default Loadpage;
