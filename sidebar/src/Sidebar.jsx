import React from 'react';
import { useState, useEffect } from 'react';

const Sidebar = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories: ', error));
    }, []);

    return (
        <aside className="w-64 h-screen bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <nav className="mt-5">
                    <ul>
                        <li className="mt-3">
                            <a onClick={() => onCategorySelect(null)} className="hover:bg-gray-700 p-2 block cursor-pointer">All products</a>
                        </li>
                        {categories.map(category => (
                            <li key={category} className="mt-3">
                                <a onClick={() => onCategorySelect(category)} className="hover:bg-gray-700 p-2 block cursor-pointer capitalize">{category}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
