import React, { useState, useEffect } from 'react';

import Card from './components/Card';

const Product = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const url = selectedCategory 
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products';

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, [selectedCategory]);

    const handleSelectProduct = product => {
        setSelectedProduct(product);
    };

    const handleBackToProducts = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            {selectedProduct ? (
                <div>
                    <Card
                        product={selectedProduct}
                        title={selectedProduct.title}
                        description={selectedProduct.description}
                        imageUrl={selectedProduct.image}
                        footerContent={<p className="text-gray-900">${selectedProduct.price}</p>}
                        onSelectProduct={() => {}}
                    />
                    <button onClick={handleBackToProducts} className="mx-2 mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600">All Products</button>
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {products.map(product => (
                        <Card
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            imageUrl={product.image}
                            footerContent={<p className="text-gray-900">${product.price}</p>}
                            onClick={() => handleSelectProduct(product)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Product;
