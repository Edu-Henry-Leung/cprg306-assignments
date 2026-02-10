"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json"

export default function ItemList() {

    let [sortBy, setSortBy] = useState("name");
    let [listCategory, setListCategory] = useState(false);
    let [groupedItems, setGroupedItems] = useState<Record<string, any> | null>(null);
    
    const handleSortName = () => {
        setSortBy("name");
        items.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        setGroupedItems(null);
        setListCategory(false);
    }

    const handleSortCategory = () => {
        setSortBy("category");
        items.sort((a, b) => {
            return a.category.localeCompare(b.category);
        })
        setGroupedItems(null);
        setListCategory(false);
    }

    const groupItemsByCategory = (arr: any[]) => {
        const copy = [...arr];
        copy.sort((a, b) => a.name.localeCompare(b.name));
        return copy.reduce((acc: Record<string, any[]>, item: any) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});
    }

    const handleListCategory = () => {
        setSortBy("groupCategory");
        setListCategory((prev) => {
            const next = !prev;
            if (next) {
                const grouped = groupItemsByCategory(items as any[]);
                setGroupedItems(grouped);
            } else {
                setGroupedItems(null);
            }
            return next;
        })
    }

    return (
        <div>
            <div className="flex justify-center">
                <button className={sortBy === "name"? "rounded p-2 m-2 bg-indigo-300 text-gray-500" : "rounded p-2 m-2 bg-indigo-500"} onClick={handleSortName}>Sort By Name</button>
                <button className={sortBy === "category"? "rounded p-2 m-2 bg-indigo-300 text-gray-500" : "rounded p-2 m-2 bg-indigo-500"} onClick={handleSortCategory}>Sort by Category</button>
                <button className={sortBy === "groupCategory"? "rounded p-2 m-2 bg-indigo-300 text-gray-500" : "rounded p-2 m-2 bg-indigo-500"} onClick={handleListCategory}>Group by Category</button>
            </div>
            
            {listCategory && groupedItems ? (
                <div>
                    {Object.keys(groupedItems).sort().map((category) => (
                        <div key={category} className="mb-4">
                            <h3 className="text-xl font-semibold capitalize text-center">{category}</h3>
                            <ul>
                                {groupedItems[category].map((item: any) => (
                                    <Item key={item.id} name={item.name} category={item.category} quantity={item.quantity} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul>
                    {items.map((item) => (
                        <Item key={item.id} name={item.name} category={item.category} quantity={item.quantity}></Item>
                    ))}
                </ul>
            )}
        </div>
    )
}