import React, { useState } from 'react';
import '../../styles/update.css';

function upDateProduct () {
    const [product, setProduct] = useState({
        name: '',
        quantity: '',
        price: '',
        supplier: '',
        totalSold: '',
        productGenerated: '',
        thresholdQuantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    return (
      <div className='product-container-update'>
    
        <div className="product-form-container">
            <h2 className="product-form-title">Update Your Product</h2>
            <form className="product-form">
                <label className="product-form-label">Product Name
                    <input type="text" name="name" value={product.name} onChange={handleChange} className="product-form-input" required />
                </label>
                <label className="product-form-label">Quantity
                    <input type="number" name="quantity" value={product.quantity} onChange={handleChange} className="product-form-input" required />
                </label>
                <label className="product-form-label">Price
                    <input type="number" name="price" value={product.price} onChange={handleChange} className="product-form-input" required />
                </label>
                <label className="product-form-label">Supplier Name
                    <input type="text" name="supplier" value={product.supplier} onChange={handleChange} className="product-form-input" required />
                </label>
                <label className="product-form-label">Total Sold
                    <input type="number" name="totalSold" value={product.totalSold} onChange={handleChange} className="product-form-input" required />
                </label>
                <label className="product-form-label">Product Generated
                    <input type="number" name="productGenerated" value={product.productGenerated} onChange={handleChange} className="product-form-input" required />
                </label>
                <label className="product-form-label">Threshold Quantity
                    <input type="number" name="thresholdQuantity" value={product.thresholdQuantity} onChange={handleChange} className="product-form-input" required />
                </label>
            </form>
        </div>
        </div>
      
    );
}

export default upDateProduct;