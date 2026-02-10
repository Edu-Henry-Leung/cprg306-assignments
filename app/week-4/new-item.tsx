"use client";

import { ChangeEvent, useState } from "react";

export default function AddItems() {
  let [name, setName] = useState("");

  let [quantity, setQuantity] = useState(1);

  let [category, setCategory] = useState("Produce");

  let [nameTouched, setNameTouched] = useState(false);

  const handleNameTouched = () => {
    setNameTouched(true);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.valueAsNumber);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name.length < 2) {
      alert("The Item name must have at least 2 characters!");
      return;
    }

    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > 99) {
      quantity = 99;
    }

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(newItem);
    alert(
      "An Item was added!\n" +
        "Name: " +
        name +
        "\n" +
        "Quantity: " +
        quantity +
        "\n" +
        "Category: " +
        category +
        "\n",
    );

    setName("");
    setQuantity(1);
    setCategory("Produce"); //Not sure how to reset select element?
    setNameTouched(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex rounded w-1/2 m-5 bg-white justify-center">
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="px-3 mb-4">
            <label className="block text-black ">Item Name: </label>
            <input
              className={
                nameTouched && name === ""
                  ? "rounded border border-red-500 bg-gray-100 text-black"
                  : "rounded border border-black bg-gray-100 text-black"
              }
              type="text"
              name="name"
              onBlur={handleNameTouched}
              value={name}
              onChange={handleNameChange}
              required
            />
            <p className="text-red-500">
              {nameTouched && name === "" && "Item Name is empty!"}
            </p>
          </div>

          <div className="px-3 mb-4">
            <label className="block text-black">Quantity: </label>
            <input
              className="rounded border border-black bg-gray-100 text-black"
              aria-valuemin={1}
              aria-valuemax={99}
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
          </div>

          <div className="px-3 mb-8">
            <label className="block text-black">Category:</label>
            <select
              className="text-black"
              name="category"
              onChange={handleCategoryChange}
            >
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

          <div className="flex justify-center">
            <button
              className="rounded p-2 bg-sky-300 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 text-black font-bold"
              disabled={name === ""}
              type="submit"
              value="Add Item"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
