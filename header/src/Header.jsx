import React from 'react';

import Signin from './components/Signin';
import Cart from './components/Cart';

const Header = () => {
    return (
        <header className="bg-gray-100 p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="h-8 mr-4 text-2xl">Shop.com</h1>
                </div>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md" />
                </div>
                
                <div className="flex items-center">
                    <Signin/>
                    <Cart />
                </div>
                    
            </div>
        </header>
    );
};




export default Header;
