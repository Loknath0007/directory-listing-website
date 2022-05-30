import React, { useState } from 'react';

const Model = () => {
  const [model, setModel] = useState('');
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className={`form-control ${
          model.length > 0 ? 'is-valid' : model === '' ? '' : 'is-invalid'
        }`}
        id="model"
        name="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
      />
      <label htmlFor="model">
        Model <span className="text-mutex">(optional)</span>
      </label>
    </div>
  );
};

export default Model;
