 
import { useState } from 'react';

import { Home, Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']
    return (
          <div className='max-w-7xl mx-auto'>
            <nav className='flex justify-between p-3 items-center'>
                <div className='flex items-center gap-2 '>
                    <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <X size={28}/> : <Menu size={28}/>
                        }
                    </div>
                     
                    <button className='btn btn-soft' >logo</button>
                </div>

                {/* Desktop Menu */}
                <ul className='flex gap-2 md:flex hidden'>
                    {
                        links.map(link => <li key={link} className='cursor-pointer'>{link}</li>)
                    }
                </ul>

                <button className='btn btn-primary' >Sign In</button>
            </nav>

            {/* Mobile Menu (Optional: dropdown logic add korte paro) */}
            <ul className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-100 p-4 shadow-md`}>
                {links.map(link => <li key={link} className='py-2'>{link}</li>)}
            </ul>
          </div>
    )
};

export default NavBar;