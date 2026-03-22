 import React, { useState, useEffect } from 'react';
 
 const PricingSection = () => {
    const [loading, setLoading] = useState(true);
    const [plans, setPlans] = useState([]);
    const [billing, setBilling] = useState('monthly');

    useEffect(() => { 
        setTimeout(() => {
            setPlans([
            { id: 1, title: 'Starter', price: 0, yearlyPrice: 0, highlighted: false,
               features: ['3 Users', '5 Projects', '1GB Storage'] },

            { id: 2, title: 'Pro', price: 29, yearlyPrice: 23, highlighted: true,
               features: ['20 Users', 'Unlimited Projects', '50GB Storage'] },

            { id: 3, title: 'Enterprise', price: 99, yearlyPrice: 79, highlighted: false,
               features: ['Unlimited Users', '500GB Storage', '24/7 Support'] },
            ]);
            setLoading(false);
        }, 2000)
    }, []);

    return (
        <div className='p-10'>

            {/* Monthly/Yearly toggle */}

            <div className='flex justify-center mb-10'>
                <div className='flex items-center gap-3'>
                    <span className='text-sm font-medium'>Monthly</span>
                    <input type="checkbox" className="toggle toggle-primary" onClick={() => setBilling(billing === 'monthly' ? 'Yearly' : 'monthly')} />
                    <span className='text-sm font-medium'>Yearly</span>
                    <span className='badge badge-success text-xs'>Save 20%</span>
                </div>
            </div>
            {
                loading ? (
                    <div className='flex flex-wrap justify-center gap-6'>
                        {[1, 2, 3].map(i =>(
                            <div key={i} className='card bg-base-100 shadow-md p-6 w-64 animate-pulse'>
                                <div className="h-5 bg-base-300 rounded w-1/3 mb-4"></div>
                                <div className="h-8 bg-base-300 rounded w-1/2 mb-4"></div>
                                <div className="h-10 bg-base-300 rounded w-full"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-wrap justify-center gap-6 '>
                        {
                            plans.map(plan => <div key={plan.id} className={`relative card bg-base-100 shadow-md p-6 border-2 w-full md:w-sm transition-transform duration-200 hover:-translate-y-2 ${plan.highlighted ? 'border-primary' : 'border-base-200'}`}>
                                {/* most popular badge add  */}
                                {
                                    plan.highlighted && (
                                        <div className='badge badge-primary absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
                                            Most Popular
                                        </div>
                                    )
                                }
                                <h2 className='text-xl font-bold'>{plan.title}</h2>
                                <p className='text-3xl font-extrabold my-2'>
                                    {plan.price === 0 ? 'Free' :`$${billing === 'monthly' ? plan.price : plan.yearlyPrice}`}
                                </p>
                                <p className='text-sm text-gray-400'>
                                    {plan.price === 0 ? 'Forever free' : `per month`}
                                </p>

                                <ul className='mt-4 flex flex-col gap-2'>
                                    {
                                        plan.features.map(feature => (
                                            <li key={feature} className='flex items-center gap-2 text-sm'>
                                                 <span className='text-success'>✓</span>
                                            </li>
                                           
                                        ))
                                    }
                                </ul>

                                <button className={`btn w-full mt-4 ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}> Get Started
                             </button>

                            </div>)
                        }
                    </div>
                )
            }
             
        </div>
    );
 };
 
 export default PricingSection;