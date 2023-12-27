import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import "./index.scss";

import Header from "header/Header";
import Sidebar from "sidebar/Sidebar";
import Product from "product/Product";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
};

  return (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <div className="w-64 flex-shrink-0">
        <Sidebar onCategorySelect={handleCategorySelect} />
      </div>
      <div className="flex-grow overflow-auto">
        <Product selectedCategory={selectedCategory} />
      </div>
    </div>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
