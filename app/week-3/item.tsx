type Item ={
    name: string,
    quantity: number,
    category: string
};

export default function Item({name, quantity, category}: Item) {
    return (
        <div className="py-2 bg-indigo-950">
            <li className="text-base font-bold text-center">Name: {name}</li>
            <li className="text-sm font-thin text-center">Quantity: {quantity}</li>
            <li className="text-sm font-thin text-center">Category: {category}</li>
        </div>
    )
}