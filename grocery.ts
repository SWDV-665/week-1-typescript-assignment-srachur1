class Grocery {
	name: string;
	quantity: number;
	price: number;
	unit: string;
	
	constructor(name: string, quantity: number, price: number, unit: string) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.unit = unit;
		
	}
}

interface product{
    name: string;
quantity: number;
   price: number;
    unit: string;
}

function groceryDetails(Product: product){
    return "Product: "+ Product.name +
           ", Price per "+ Product.unit + ": " + Product.price + " " +
           ", Quantity: " +  Product.quantity;
}

let groceryList = [new Grocery("Milk", 1, 4.49, "Gallon"), new Grocery("Eggs", 1, 8.99, "Dozen"), new Grocery("Bread", 1, 3.99, "lbs")];

for(let Item of groceryList ){
    document.body.innerHTML += groceryDetails(Item) + "<br\>";
}