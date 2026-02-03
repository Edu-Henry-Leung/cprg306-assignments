"use client";

import { ChangeEvent, useState } from "react";

export default function AddItems() {
    let [name, setName] = useState("");

    let [quantity, setQuantity] = useState(1);

    let [category, setCategory] = useState("Produce");

    let [nameTouched, setNameTouched] = useState(false);

    const handleNameTouched = () => {
        setNameTouched(true);
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(event.target.valueAsNumber);
    }

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        const newItem = {
            name: name,
            quantity: quantity,
            category: category,
        }

        console.log(newItem)
        alert("An Item was added!\n" +
            "Name: " + name + "\n" +
            "Quantity: " + quantity + "\n" +
            "Category: " + category + "\n"
        );

        name = "";
        quantity = 1;
        category = "Produce";

    }

    return (
        <div className="flex w-1/2 justify-center">
            <form className="flex bg-white rounded p-6" onSubmit={handleSubmit}>
                <div className="px-3">
                    <label className="block text-black">Item Name: </label>
                    <input className={'rounded border border-black bg-gray-100 text-black'} type="text" name="name" onBlur={handleNameTouched} value={name} onChange={handleNameChange} required/>
                </div>
                
                <div className="px-3">
                    <label className="block text-black">Quantity: </label>
                    <input className="rounded border border-black bg-gray-100 text-black" aria-valuemin={1} aria-valuemax={99} type="number" name="quantity" value={quantity} onChange={handleQuantityChange} required/>
                </div>
                
                <div className="px-3">
                    <label className="block text-black">Category:</label>
                    <select className="text-black" name="category" onChange={handleCategoryChange}>
                        <option value={category}>Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <button className="rounded p-2 bg-gray-200 text-black font-bold"type="submit" value="Add Item">Add Item</button>

            </form>
        </div>
        
    )
}