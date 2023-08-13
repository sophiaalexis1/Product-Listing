import { useState } from "react";
import Product from '../Product/Product'

const CategorySelect = ({products, selectedCategory, onSelectCategory}) => {
    const allCategories = [...new Set(products.map((product) => product.category))];
    return (
        <div className="category-select">
            <label htmlFor="category">Select Category:</label>
            <select
                className="drop-content"
                id="category"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
            >
            <option value="">All Products</option>
            {allCategories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
          ))}
            </select>
        </div>
    );
};

export default CategorySelect;