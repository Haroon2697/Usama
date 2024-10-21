import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    title: "United Kingdom",
    price: "£8",
    period: "Week",
    features: [
      "Free Trial Available",
      "4 classes a Week",
      "Flexible Timing",
      "30 Min Classes"
    ]
  },
  {
    title: "US/Canada",
    price: "$50",
    period: "Month",
    features: [
      "Free Trial Available",
      "5 classes a Week",
      "Flexible Timing",
      "30 Min Classes"
    ],
    highlighted: true
  },
  {
    title: "US/Canada",
    price: "$10",
    period: "Week",
    features: [
      "Free Trial Available",
      "4 classes a Week",
      "Flexible Timing",
      "30 Min Classes"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600">
            Customize your plan for specialized classes, including memorization and language instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg transition transform duration-300 hover:scale-105 ${plan.highlighted ? 'border-4 border-green-600' : ''}`}
              aria-label={`Pricing plan for ${plan.title}`}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-green-600 text-white' : 'text-gray-800'}`}>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="text-3xl font-semibold mb-2">
                  {plan.price}<span className="text-lg font-normal">/{plan.period}</span>
                </div>
                <ul className="mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className={`block w-full text-center py-2 px-4 rounded ${plan.highlighted ? 'bg-white text-green-600 hover:text-black' : 'bg-green-600 text-white'} hover:bg-green-500 transition duration-300`}
                  aria-label={`Contact us for ${plan.title} plan`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
