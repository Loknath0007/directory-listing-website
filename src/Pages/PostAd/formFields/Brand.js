import React, { useState } from 'react';

const Brand = () => {
  const [brand, setBrand] = useState('');
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className={`form-control ${
          brand.length > 0 ? 'is-valid' : brand === '' ? '' : 'is-invalid'
        }`}
        id="brand"
        name="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
      />
      <label htmlFor="brand">
        Brand <span className="text-mutex">(optional)</span>
      </label>
    </div>
  );
};

export default Brand;
