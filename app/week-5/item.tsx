type Item ={
    name: string,
    quantity: number,
    category: string
};

export default function Item({name, quantity, category}: Item) {
    return (
        <div className="flex justify-center">
            <div className="rounded border border-white py-2 w-1/3 mb-2 bg-indigo-950">
                <ul className="text-base font-bold text-center">Name: {name}</ul>
                <ul className="text-sm font-thin text-center">Quantity: {quantity}</ul>
                <ul className="text-sm font-thin text-center">Category: {category}</ul>
            </div> 
        </div>
    )
}