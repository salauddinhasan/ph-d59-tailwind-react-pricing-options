 import React, { useState, useEffect } from 'react';
 
 const PricingSection = () => {
    const [loading, setLoading] = useState(true);
    const [plans, setPlans] = useState([]);

    useEffect(() => { 
        setTimeout(() => {
            setPlans([
            { id: 1, title: 'Starter', price: 0, highlighted: false },
            { id: 2, title: 'Pro', price: 29, highlighted: true },
            { id: 3, title: 'Enterprise', price: 99 , highlighted: false},
            ]);
            setLoading(false);
        }, 2000)
    }, []);

    return (
        <div className='p-10'>
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
                            plans.map(plan => <div key={plan.id} className={`card bg-base-100 shadow-md p-6 border-2 w-full md:w-sm ${plan.highlighted ? 'border-primary' : 'border-base-200'}`}>
                                <h2 className='text-xl font-bold'>{plan.title}</h2>
                                <p className='text-3xl font-extrabold my-2'>{plan.price ===0 ? 'Free' : `$${plan.price}` }</p>

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