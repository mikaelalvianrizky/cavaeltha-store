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
          <div key={plan.title} className="bg-mid-blue p-3 rounded-md">
            <h3 className="font-bold border-b-2 border-light-blue pb-2 mb-2 text-center">{plan.title}</h3>
            <div className="bg-white rounded-lg px-3">
              <ul>
                {plan.options.map((option) => (
                  <li key={option.duration} className="flex justify-between py-1 text-black">
                    <span>{option.duration}</span>
                    <span className="font-semibold">{option.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Rules Section */}
      <div className="bg- p-4">
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