import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-dark-blue rounded-lg shadow-lg overflow-hidden text-off-white">
      {/* Card Header */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center">{product.name}</h2>
      </div>

      {/* Plans Section */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.plans.map((plan) => (
          // This div now acts as a simple wrapper for each plan section
          <div key={plan.title}>

            {/* 1. Title Container (Top part) */}
            <div className="bg-mid-blue p-3 rounded-t-md">
              <h3 className="font-bold text-center">{plan.title}</h3>
            </div>

            {/* 2. Price Container (Bottom part) */}
            <div className="bg-white text-dark-blue p-3 rounded-b-md">
              <ul>
                {plan.options.map((option) => (
                  <li key={option.duration} className="flex justify-between py-1">
                    <span className="font-bold">{option.duration}</span>
                    <span className="font-bold">{option.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        ))}
      </div>

      {/* Rules Section (Corrected the background class) */}
      <div className="bg-dark-blue p-4">
        <ul className="list-disc list-inside space-y-1 text-sm">
          {product.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;