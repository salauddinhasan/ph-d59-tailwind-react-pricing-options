import React, { Component } from 'react'
import Link from './Link';


// urls.js
 const urls = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" },
];

export class NavBar extends Component {
  render() {
    return (

        <nav>
            <ul className='flex text-center p-4 gap-x-5 justify-center'>
                {
                    urls.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>


        
        
        // <nav>
        //     <ul className='flex text-center p-4 gap-x-5 justify-center'>
        //         {
        //             urls.map(route => <li key={route.id}>
        //             <a href={route.path}>{route.name}</a>
        //         </li>)
        //         }
        //     </ul>
        // </nav>





    //   <nav>
    //     <ul className='flex text-center p-4 gap-x-5 justify-center'>
    //         <li><a href="/home">Home</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/blog">Blog</a></li>
    //         <li><a href="/contact">Contact</a></li>
    //     </ul>
    //   </nav>
    )
  }
}

export default NavBar